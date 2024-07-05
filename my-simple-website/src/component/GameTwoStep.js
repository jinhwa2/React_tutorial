import React, {useState} from "react";

const GameTwoStep = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() *10)+1);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    setGuess(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


<div>
  <h1>스무고개</h1>
  <from onSubmit={handleSubmit}>
  <input
  type="number"
  value={guess}
  onChange={andleSubmit}
  placeholder="1에서 30 사이의 숫자 입력하기"/>
  <button type="submit">추측해봐!</button>

</from>
{/* message = 숫자를 맞췄는지 틀력는지 확인하는 메세지 */}
<p>{message}</p>
<button onClick={handleRestart}>재시작버튼눌럽</button>
  
</div>

}