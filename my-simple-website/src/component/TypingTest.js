import React, {useState} from "react";
import Result from './Result';
import './TypingTest.css';

//문제는 타자대회 컴포넌트 바깥으로 옮겨 별개로 사용
const 타이핑문제 = [
  '도토리는 맛있다.', // 1단계 문제는 0번 문제
  '도토리는 정말 맛있다.', // 2단계 문제는 1번 문제
  '도레미파솔라시도 도시라솔파미레도.', // 3단계 문제는 2번 문제
  'GameTwoStepStart',    // 4단계 문제는 3번 문제
  'TicTaptoe const import'  // 5단계 문제는 4번 문제
];
//문제를 5개 만들고 5개 문제가 무사히 돌아가는지 확인 문제는 임의로 작성

// 클라이언트가 입력한 값이 일치하는지 확인 후 Result.js 적힌 결과를 보여주는 게임


const 타자대회 = () => {
   const [텍스트입력, set텍스트입력] = useState(''); //처음 입력창은 빈 공간
   const [결과확인, set결과확인] = useState(false); //처음에는 맞춘게 없으니 false
   //현재 문제와 다음문제로 넘어가는 set다음문제 작성
   const [현재문제번호, 다음문제번호] = useState(0); //처음 시작하는 문제 번호는 0번
   const [현재문제번호1, 다음문제번호1] = useState(1); //2단계 문제는 1번 문제
   const [현재문제번호2, 다음문제번호2] = useState(2); //3단계 문제는 2번 문제
   const [현재문제번호3, 다음문제번호3] = useState(3); //5단계 문제는 4번 문제
   const [현재문제번호4, 다음문제번호4] = useState(4);




  const 현재텍스트 = 타이핑문제[현재문제번호]; //타이핑문제에는 각각 순서숫자가 들어있는데 0부터 시작
   // 타이핑문제 -> 현재텍스트 변경해서 각각의 타이핑문제를 비교할 예정
   const 값변경하기 = (e) => {
      set텍스트입력(e.target.value);

      if(e.target.value === 현재텍스트){ //타이핑문제 -> 현재텍스트
          set결과확인(true);
      }
   }

  const 다음문제로이동 = () => {
    set텍스트입력(''); //다음문제로 이동할 때 기존에 작성한 정답 지워주기
    set결과확인(false);
    //만약에 2문제 중 1문제 라면 다음 문제로 넘어가기
    if(현재문제번호 < 타이핑문제.length -1){ //index가 0부터 시작하기 때문에 length에 -1을 해줘야함
       다음문제번호(현재문제번호 + 1);
    } else { //만약에 총 2문제 중에서 총 2문제를 모두 맞추면 아래코드 동작하기
      alert('모두 맞췄습니다!!!!');
      다시시작();
    }
  }

  const 다시시작 = () => {
    set텍스트입력('');
    set결과확인(false);
  }
   return (
    <div className="typing-test">
      <h1>타자치기대회</h1>
      <p>오늘의 문제: {현재텍스트}</p> 
      <div className="typing-container">
        {/* value = 초기에 빈공간 
        onChange = 작성한 값 변경 
        disabled = 정답일 때 입력한 값 수정 못하게 막어버림*/}
        <textarea
          value={텍스트입력}
          onChange={값변경하기}
          disabled={결과확인}
        />
        {/* 변경되지 않은 사진을 넣을 때는 public
            사진의 특정값을 주기적으로 변경할 때는 src
            현재는 한 사진을 고정할 것이기 떄문에 public
        */}
        <img src="/hancom.jpg" className="character-image"/>
      </div>
      {/* Result js 파일에 inputText = 텍스트입력과 타이핑문제 결과 전달 */}
       {결과확인 && 
       <Result inputText={현재텍스트} correctText={현재텍스트}
       />}
       {/*Link 이용해서 다음문제 이동하기  몇초안에 타자작성하기 use */}
       {결과확인 && <button onClick={다시시작}>다시시작버튼</button>}
       {결과확인 && <button onClick={다음문제로이동}>다음 문제</button>}
       
    </div>
   )
}

export default 타자대회;