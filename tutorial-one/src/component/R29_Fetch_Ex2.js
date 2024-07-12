import React,{useEffect,useState} from "react";

//https://jsonplaceholder.typicode.com/photos
//데이터 가져오기 Fetch API 이용해서 실행


const 사진리스트 = () => {
  const[사진들,set사진들] = useState([]);
  
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => {
     return res.json();
  })
  /*.then(data => {
    set사진들(data);
  })  */
  .then(data => {
    //set사진들(data); api 주소에 작성된 모든 데이터 가져오기
    //데이터의 일부분만 가져오길 원한다면 slice를 이용
    //slice(처음가져올 범위,어디까지가져올지마무리하는마무리범위)
    set사진들(data.slice(0,10)); //데이터 처음~10개 사진만 가져오기
  })
  .catch(err => {
     alert("에러 발생" + err);
  },[]);
})
      return (
        <>
          <h1>사진리스트</h1>
          <ul>
           {사진들.map(사진 => (
             <li key={사진.id}>
              <img src={사진.thumbnailUrl}/>
              <p>{사진.title}</p>

             </li>
           ))}

          </ul>
        </>
      )
}
export default 사진리스트;
//export default 사진리스트; 맨위에 작성시 에러

