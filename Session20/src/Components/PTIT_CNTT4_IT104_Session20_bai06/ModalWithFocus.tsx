import React, { useState, useRef, useEffect } from 'react';

export default function ModalWithFocus() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Mở Modal</button>
            {isOpen && (
                <div className="modal">
                    <input ref={inputRef} type="text" placeholder="Nhập dữ liệu..." />
                    <button onClick={() => setIsOpen(false)}>Đóng Modal</button>
                </div>
            )}
        </div>
    );
}
