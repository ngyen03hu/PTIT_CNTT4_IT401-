import React, { Component } from 'react'
type state = {
    subjects: string[];
}
export default class SubjectList extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            subjects: ["toan", "van ", "hoa", "anh", "sinh"]
        }
    }
    render() {
        return (
            <div>
                <h2>Danh sách môn học</h2>
                <ul>
                    {this.state.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        );
    }

    
}
