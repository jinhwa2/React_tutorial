import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TicTaptoe.css';

const 배열랜덤섞기 = (배열) => {
   //sort = 가지런히 정렬하다 할 때 정렬   랜덤으로 나온 값을 정렬
  // Math.random() - 0.5 : 배열을 랜덤으로 섞을 때 자주 사용 -0.5 ~ 0.5 사이 생성
  // -0.5 를 붙이지 않으면 Math.random() 는 0.0 ~ 0.99999999999999999999999999... 사이 값 반환
  //  0.5 범위 지정용
  return 배열.sort(() => Math.random() - 0.5);
};
  const TicTapToeTwoStep = () => {
    // numbers 1부터 9까지 숫자가 섞인 배열
    // ...Array(9) 숫자가 담길 그릇을 9개 만듬 숫자가 담길 그릇이 9개
    // .keys() 숫자를 가지고옴
    // 어떤 숫자를 가지고 오냐면  0 => 0 + 1     1 ~ 9 까지 생성
    // 1 ~ 9 까지 생성된 수를 배열랜덤섞기를 이용해서 숫자가 담긴 그릇을 섞는 것
  const [numbers, setNumbers] = useState(
    배열랜덤섞기([...Array(20).keys()].map((n) => n + 1))
  );

  const [nextNumber, setNextNumber] = useState(1);

  const [message, setMessage] = useState("");

  const 숫자클릭하기 = (number) => {
    if (number === nextNumber) {
      if (number === 20) {
        setMessage("축하해용. 모든숫자 순서대로 다 클릭했어영");
        // 숫자를 21로 변경
      } else {
        setMessage(nextNumber + 1);
      }
    } else {
      setMessage("틀렸어용.처음부터 다시하세욤");
    }
  };

  const 재시작버튼 = () => {
    setNumbers(배열랜덤섞기([...Array(20).keys()].map((n) => n + 1)));
  };

  return (
    <div>
      <h1>틱탭토</h1>
      <div className="tictaptoe-two-grid">
        {numbers.map((number) => (
          <button>{number}</button>
        ))}
      </div>
      <p>{message}</p>
      {/*예를들어 수를 모두 맞추면 처음으로 이동하기*/}
      <button className="restart-button"onClick={재시작버튼}>게임 재시작</button>
      <Link to ="/tictoptoe"></Link>
    </div>
  );
};

export default TicTapToeTwoStep;