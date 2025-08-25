import React, { Component } from 'react';

type Color = {
    color: string;
    label: string;
};

type State = {
    colors: Color[];
};

export default class Button extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            colors: [
                { label: 'Primary', color: 'blue' },
                { label: 'Secondary', color: 'gray' },
                { label: 'Success', color: 'green' },
                { label: 'Warning', color: 'yellow' },
                { label: 'Danger', color: 'red' },
                { label: 'Info', color: 'turquoise' },
                { label: 'Light', color: 'white' },
                { label: 'Dark', color: 'black' }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.colors.map((item, index) => (
                    <button
                        key={index}
                        style={{
                            backgroundColor: item.color,
                            color: item.color === 'white' ? 'black' : 'white',
                            padding: '10px 20px',
                            margin: '5px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        );
    }
}
