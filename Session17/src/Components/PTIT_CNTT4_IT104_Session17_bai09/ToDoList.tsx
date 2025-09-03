import React, { useEffect, useState } from 'react';
import './ToDoList.css';

type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
};

export default function ToDoList() {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState<Task[]>(() => {
        return JSON.parse(localStorage.getItem('taskList') || '[]');
    });

    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    const handleAddTask = () => {
        const trimmed = taskName.trim();
        if (trimmed === '') {
            alert('Không được để trống');
            return;
        }
        if (editingId !== null) {
            setTaskList(taskList.map(task => (
                task.id === editingId ? { ...task, name: trimmed } : task
            )));
            setEditingId(null);
        } else {
            if (taskList.some(task => task.name === trimmed)) {
                alert('Công việc bị trùng!');
                return;
            }
            const newTask: Task = {
                id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
                name: trimmed,
                isCompleted: false
            };
            setTaskList([...taskList, newTask]);
        }
        setTaskName('');
    };

    const handleDelete = (id: number) => {
        if (confirm('Xác nhận xoá công việc?')) {
            setTaskList(taskList.filter(task => task.id !== id));
        }
    };

    const handleEdit = (task: Task) => {
        setTaskName(task.name);
        setEditingId(task.id);
    };

    const handleToggleComplete = (id: number) => {
        setTaskList(taskList.map(task =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const completedCount = taskList.filter(t => t.isCompleted).length;

    return (
        <div className="container">
            <h2>Danh sách công việc</h2>
            <div className="input-line">
                <input
                    type="text"
                    placeholder="Nhập tên công việc"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                />
                <button onClick={handleAddTask}>
                    {editingId === null ? 'Thêm' : 'Cập nhật'}
                </button>
            </div>

            <div className="task-container">
                {taskList.map((task) => (
                    <div className="task" key={task.id}>
                        <div className="task-info">
                            <input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => handleToggleComplete(task.id)}
                            />
                            <label className={task.isCompleted ? 'completed' : ''}>
                                {task.name}
                            </label>
                        </div>
                        <div className="button-container">
                            <button onClick={() => handleEdit(task)}>✏️</button>
                            <button onClick={() => handleDelete(task.id)}>🗑️</button>
                        </div>
                    </div>
                ))}
            </div>

            <p className="status">
                Công việc đã hoàn thành: {completedCount} / {taskList.length}
            </p>
        </div>
    );
}