import React from "react";

interface Bill {
    id: number;
    name: string;
    amount: number;
    status: "Đã thanh toán" | "Chưa thanh toán";
}

interface BillTableProps {
    bills: Bill[];
    onDelete: (id: number) => void;
    onEdit: (bill: Bill) => void;
}

const BillTable: React.FC<BillTableProps> = ({ bills, onDelete, onEdit }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tên chủ hộ</th>
                    <th>Số tiền (VND)</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {bills.map((bill) => (
                    <tr key={bill.id}>
                        <td>{bill.name}</td>
                        <td>{bill.amount.toLocaleString()}</td>
                        <td>
                            <span
                                className={`status ${bill.status === "Đã thanh toán" ? "paid" : "unpaid"
                                    }`}
                            >
                                {bill.status}
                            </span>
                        </td>
                        <td>
                            <button className="edit" onClick={() => onEdit(bill)}>Sửa</button>
                            <button className="delete" onClick={() => onDelete(bill.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BillTable;