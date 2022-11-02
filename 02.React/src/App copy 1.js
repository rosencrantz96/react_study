import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // 1. 반드시 부모 요소로 감싸야 한다. 
    // (h1, h2 태그만 나란히 쓰면 오류 남. div나 시멘틱 태그 같은 것들로 감싸야 한다.)
    // 태그나 fragment 이용. 
    <>
      <h1>리액트</h1>
      <h2>리액트 안녕</h2>
    </>
  );
}

export default App;
