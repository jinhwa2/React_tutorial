/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItems  : 젙에 항목 수
paginate    : 페이지 번호를 업데이트 하는 함수
currentPage : 현재 보고 있는 페이지 번호

전체 항목수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
페이지번호들에 페이지 번호를 저장ㅅ이킬 것

*/
const PaginationEx = ({itemPerPage,totalItems,paginate,currentPage}) => {
const 페이지번호들 = [];
const totalPages = Math.ceil(totalItems / itemPerPage);
for(let i = 1; i <= totalPages ; i++){
    console.log("페이지네이션 i 값 :" + i);
    페이지번호들.push(i); //push = 값을 추가 페이지번호들에 만들어진 번호들을 추가
   }
   //페이지 번호 새로고침 함수
   //모든 페이지 번호를 한 번에 보여주는 것이 아니라 10개씩 보여줄 것
   const renderPageNumber = () => {
    if(totalPages <= 10) {
       return 페이지번호들;
     }
     const startPage = Math.max(1,currentPage -5);
     const endPage   = Math.min(totalPages,currentPage +4);
     return 페이지번호들.slice(startPage -1, endPage);
   }
   return (
    <nav>
      <ul className='pagination'>
        {/*페이지 10페이지 까지만 보여주고*/}
        {/*<< 화살표 이용해서 이전으로 기능 만들기*/}
        {currentPage > 1 &&(
          <li><a onClick={() => paginate(currentPage -1) } href="!#" className="page-link">
            &laquo;
            </a>
          </li>
        )}
         {/*모든 페이지 번호*/}
         {renderPageNumber().map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' :''}`}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
         ))}
       {/* >>화살표 이용해서 이전으로 기능 만들기 */} 
       {currentPage > 1 && (
        <li><a onClick={() => paginate(currentPage +1)} href="!#" className="page-link">
           &laquo;
           </a>

        </li>
       )} 
      </ul>
    </nav>
   )
}
export default PaginationEx;