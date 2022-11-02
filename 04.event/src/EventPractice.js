import React, { useState } from 'react';

const EventPractice = () => {
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUseid = (e) => setUserid(e.target.value)
    const onChangePassword = (e) => setPassword(e.target.value)

    const onClick = (e) => {
        alert(userid + ":" + password)
        setUserid('')
        setPassword('')
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

    return (
        <div>
        <h1>로그인 창</h1>
        <input
          type="text"
          name="userid"
          placeholder="아이디를 입력하세요"
          value={userid}
          onChange={onChangeUseid}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={onChangePassword}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
      </div>
    );
}

export default EventPractice;
