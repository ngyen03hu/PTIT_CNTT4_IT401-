import React from "react";

export default function Ex03() {
    const umse = [
        { ten: "Nguyễn Văn A" },
        { ten: "Trần Văn B" },
    ];

    return (
        <div>
            <h2>Danh sách</h2>
            <ul>
                {umse.map((item, index) => (
                    <li key={index}>{item.ten}</li>
                ))}
            </ul>
        </div>
    );
}
