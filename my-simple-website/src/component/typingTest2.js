import React, { useState } from "react";
import Result from './Result';
import './TypingTest.css';

//클라이언트가 입력한 값이 일치하는지 확인 후 Result.js 적힌 결과를 보여주는 게임
const 타자대회 = () => {
  const [텍스트입력,set텍트스입력] = useState(''); // 처음 입력창은 빈공간
  const [결과확인,set결과확인] = useState(false); // 처음에는 맞춘게 없으니 false

  const 타이핑문제 = '도토리는 정말 맛있다.';

  const 값변경하기 = (e) => {
    set텍트스입력(e.target.value);

    if(e.target.value === 타이핑문제){
        set결과확인(true);
    }
  }
}
 const 다시시작 = () => {
   set텍스트입력('');
   set결과확인(false);
 }
  return (
    <div className="typing-test">
      <h1>타자치기대회2</h1>
      <p>{타이핑문제}</p>
      <div className="typing-container">
      <textarea
        value={텍스트입력}
        onChange={값변경하기}
        disabled={결과확인}
      />
   <img src="/hancom.jpg" className="character-image"/>
   
      </div>
    
    </div>
  )