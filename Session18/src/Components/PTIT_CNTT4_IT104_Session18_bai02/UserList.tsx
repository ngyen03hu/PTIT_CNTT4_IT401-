import React, { useMemo } from 'react';

type User = {
    id: number;
    name: string;
    age: number;
};

export default function UserList() {
    const users: User[] = [
        { id: 1, name: "duy", age: 17 },
        { id: 2, name: "minh", age: 20 },
        { id: 3, name: "tai", age: 22 },
        { id: 4, name: "tu", age: 16 },
        { id: 5, name: "anh", age: 25 },
    ];

    const usersAbove18 = useMemo(() => {
        return users.filter((user) => user.age > 18);
    }, [users]);

    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h2>Danh sách người dùng trên 18 tuổi</h2>
            <ul>
                {usersAbove18.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} tuổi
                    </li>
                ))}
            </ul>
        </div>
    );
}
