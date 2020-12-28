import React, { Component } from 'react';
import './App.css';

class Subject extends Component { 
  render() { //클래스 안에서는 FUNCTION 생략
    return (
      <header> 
        {/* 하나의 최상위 태그만 써야함 */}
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}


//컴포넌트를 만드는 곳
class App extends Component { //App이라는 클래스, Component라는 리엑트가 가지고있는 속성, 유사 자바스크립트  
  render() { //render라는 메소드를 가지고 있음.
    return (
      <div className="App">
        <Subject />
      </div>
    );
  }
}

export default App;
