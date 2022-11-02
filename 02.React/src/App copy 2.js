import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    //2. {} 중괄호를 이용시 자바스크립트 표현식을 쓸 수 있다. 
    <>
      { name === '리액트' ? <h1>리액트입니다.</h1> : <h2>아닙니다.</h2> }
    </>
  );
}

export default App;
