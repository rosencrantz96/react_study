import React, { Component } from 'react'

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  }

  handleChange = (e) => {
    // state 변경 함수
    this.setState({ 
        [e.target.name]: e.target.value })
  }

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message)
    this.setState({ 
        message: '',
        username: ''
     })
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력하세요"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        />  
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}

export default EventPractice
