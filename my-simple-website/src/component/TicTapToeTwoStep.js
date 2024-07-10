import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TicTaptoe.css';

const 배열랜덤섞기 = (배열) => {
  return 배열.sort(() => Math.random() - 0.5);
};
const TicTapToeTwoStep = () => {
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