import React, { Component } from 'react';

type State = {
    isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }

    toggleTheme = () => {
        this.setState((prevState) => ({
            isDarkMode: !prevState.isDarkMode,
        }));
    };

    render() {
        const { isDarkMode } = this.state;

        const themeStyle: React.CSSProperties = {
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            padding: '20px',
            textAlign: 'center',
            minHeight: '100vh',
        };

        return (
            <div style={themeStyle}>
                <button onClick={this.toggleTheme}>Chuyển theme</button>
                <p>
                    {isDarkMode
                        ? 'Chế độ Tối đang bật'
                        : ' Chế độ Sáng đang bật'}
                </p>
            </div>
        );
    }
}
