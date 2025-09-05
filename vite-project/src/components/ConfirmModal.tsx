import React from "react";

interface ConfirmModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>Bạn có chắc chắn muốn xóa hóa đơn này?</p>
                <div className="modal-actions">
                    <button className="confirm" onClick={onConfirm}>OK</button>
                    <button className="cancel" onClick={onCancel}>Hủy</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;