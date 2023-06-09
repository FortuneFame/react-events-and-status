import React from 'react';
import './Counter.css';
import Controls from './Controls.js'
import Value from './Value.js';

class Counter extends React.Component {

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }))
    };

    handleDecrement = () => {
         this.setState(prevState => ({
            value: prevState.value - 1,
        }))
    };

    render() {

        const { value } = this.state;

        return (
            <div className="Counter">
                <Value
                    onValue={value} />
                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        );
    };
};

export default Counter;