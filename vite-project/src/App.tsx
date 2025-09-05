import React, { useEffect, useState } from "react";
import "./App.scss";
import "./App.css"
import Header from "./components/Header";
import BillForm from "./components/BillForm";
import BillTable from "./components/BillTable";
import Pagination from "./components/Pagination";
import ConfirmModal from "./components/ConfirmModal";

interface Bill {
  id: number;
  name: string;
  amount: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
}

const App: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const billsPerPage = 5;

  useEffect(() => {
    const stored = localStorage.getItem("bills");
    if (stored) setBills(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  const handleAddBill = (name: string, amount: number, status: string) => {
    const newBill: Bill = {
      id: Date.now(),
      name,
      amount,
      status: status as Bill["status"],
    };
    setBills([...bills, newBill]);
  };

  const handleDeleteBill = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      setBills(bills.filter((b) => b.id !== deleteId));
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  const indexOfLast = currentPage * billsPerPage;
  const indexOfFirst = indexOfLast - billsPerPage;
  const currentBills = bills.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(bills.length / billsPerPage);

  return (
    <div className="container">
      <Header />
      <BillForm onAdd={handleAddBill} />
      <BillTable bills={currentBills} onDelete={handleDeleteBill} onEdit={() => { }} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onChangePage={setCurrentPage} />
      <ConfirmModal isOpen={deleteId !== null} onConfirm={confirmDelete} onCancel={cancelDelete} />
    </div>
  );
};

export default App;