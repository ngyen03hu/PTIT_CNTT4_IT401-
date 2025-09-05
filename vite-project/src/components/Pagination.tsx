import React from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onChangePage }) => {
    return (
        <div className="pagination">
            <button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1}>
                {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => onChangePage(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => onChangePage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {">"}
            </button>
        </div>
    );
};

export default Pagination;