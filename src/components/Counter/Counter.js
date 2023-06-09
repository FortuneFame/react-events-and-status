import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    handleIncrement = event => {
        console.log('+1');
        console.log(event.target);
        
    };

    handleDecrement = event => {
        console.log('-1');
        console.log(event.target);
    };

    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">0</span>
                <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>
                        Увеличить на 1
                    </button>
                    <button type="button" onClick={this.handleDecrement}>
                        Уменьшить на 1
                    </button>
                </div>
            </div>
        );
    };
};

export default Counter;