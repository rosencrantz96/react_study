// import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent'

const App = () => { 
  // return <MyComponent name="React" /> // name이라는 props를 지정한 것 
  // return <MyComponent />
  
  return <MyComponent name="react" forNumber={1}>리액트</MyComponent>
}

export default App;
