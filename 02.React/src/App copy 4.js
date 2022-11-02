import './App.css';

function App() {
  // 4. 스타일 이용해 인라인 스타일 지정 가능
  const name = '리액트'
  const style = {
    backgroundColor: 'red',
    color: 'black',
    fontSize: '48px'
  }
  return (
    <div  style={style}>{name}</div>
  );
}

export default App;
