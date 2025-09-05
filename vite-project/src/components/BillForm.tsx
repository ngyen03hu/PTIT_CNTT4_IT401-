
import React, { useState } from "react";

interface BillFormProps {
    onAdd: (name: string, amount: number, status: string) => void;
}

const BillForm: React.FC<BillFormProps> = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [status, setStatus] = useState("Chưa thanh toán");

    const handleSubmit = () => {
        if (!name || !amount) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        onAdd(name, Number(amount), status);
        setName("");
        setAmount("");
        setStatus("Chưa thanh toán");
    };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Tên chủ hộ"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Số tiền"
                value={amount}
                onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Chưa thanh toán">Chưa thanh toán</option>
                <option value="Đã thanh toán">Đã thanh toán</option>
            </select>
            <button className="text-blue-400 col-end-1" onClick={handleSubmit}>Thêm</button>
        </div>
    );
};

export default BillForm;