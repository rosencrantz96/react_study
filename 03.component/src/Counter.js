import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        // super: constructr사용시 반드시 선언.component의 생성자 함수를 호출해줌
        super(props)
        // state 초기화(state: 컴포넌트 내부에서 변경할 수 있는 데이터)
        this.state = {
            number: 0,
            number2: 0,
            fixedNumber: 0, 
        }
    }
    render() {
        const { number, number2, fixedNumber } = this.state
        return (
            <div>
                <h1>{number}</h1>
                <h2>고정숫자: {fixedNumber}</h2>
                <button onClick={()=>{
                    this.setState({
                        number: number + 1
                    }, ()=>{
                        console.log('방금 state가 호출되었습니다.')
                        console.log(this.state)
                    })

                    // this.setState({ number: number + 1 })
                    // this.setState((prevState)=>{
                    //     return {
                    //         number: prevState.number + 1
                    //     }
                    // })    
                }}>+1</button>
                <h1>{number2}</h1>
                <button onClick={()=>{
                    this.setState({ number: number -1 })
                }}>-1</button>
            </div>
        );
    }
}

export default Counter;
