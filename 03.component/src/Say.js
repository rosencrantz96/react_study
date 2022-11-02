import React, { useState } from 'react';

const Say = () => {
    const [ message, setMessage ] = useState('디폴트')
    const onClickEnter = () => setMessage('안녕하세요.')
    const onClickLeave = () => setMessage('안녕히 가세요.')

    // 1. useState 선언 
    //    const [ 초기값 변수, 업데이트 함수] = useState(초기값)
    // 2. useState 사용
    //    업데이트 함수(업데이트 값)
    const [ color, setColor ] = useState('black')

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick = {()=>{ setColor('red') }}>빨강</button>
            <button style={{color: 'green'}} onClick = {()=>{ setColor('green') }}>초록</button>
            <button style={{color: 'blue'}} onClick = {()=>{ setColor('blue') }}>파랑</button>
        </div>
    );
}

export default Say;
