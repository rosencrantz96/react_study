import './App.css';

function App() {
  const name = '리액트'
  
  return (
    // 6. 닫는 태그가 반드시 있어야 한다. 
    <>
      <div className="react">{name}</div>
      {/* <input></input> */}
      <input />
      {/* 닫는 태그가 있어야 한다! 무조건~ */}
    </>
  );
}

export default App;
