/* eslint-disable */
import logo from './logo.svg';
import './App.css';

//리액트에 있는 내장함수(useState) 하나를 사용 할거임
import React, { useState } from 'react'; 

function App() {


  //useState를 실행하면 array가 생김 [a,b] a는 '남자코트추천이라는 데이터', b는 a를 변경해주는 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학' ]);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={  제목바꾸기 }>버튼</button>
      <div className='list'>
      <h3> { 글제목[0] } <span onClick={()=> {따봉변경(따봉++)} }>👍</span> {따봉} </h3>
      <p>7월 17일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 글제목[1] } </h3>
      <p>7월 17일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3> { 글제목[2] } </h3>
      <p>7월 17일 발행</p>
      <hr/>
      </div>

      <Modal/>


    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;
