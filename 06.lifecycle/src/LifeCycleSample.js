import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = { 
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    render() {

        console.log('render')
        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => (this.myRef = ref)}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button></button>
            </div>
        )
    }
}

export default LifeCycleSample;
