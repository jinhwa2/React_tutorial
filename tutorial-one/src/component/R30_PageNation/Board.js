import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Board = () => {
    // 데이터 정보 가져오는 변수명 작성
    const [data, setData] = useState([]);
    // 현재페이지      -> currentPage
    const [currentPage, setCurrentPage] = useState(1);
    // 페이지당게시글수 -> itemPerPage
    const [itemPerPage] = useState(10); //한 페이지에서 게시글 10개씩 보여줌

    // axios 이용해서 항목 가져오기
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert(err + "발생 !!!");
        });
    },[]);


    //현재페이지에서 첫번째 항목과 마지막 항목, 게시글리스트 체크
    const lastItem = currentPage * itemPerPage; // 변수명변경 마지막항목 length -> lastItem
    const firstItem = lastItem - itemPerPage; // 변수명변경 첫번째항목 index -> firstItem 
    const postList = data.slice(firstItem, lastItem);

    // 이동할 페이지를 클릭할 때 사용할 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    return (
        <div className='container'>
            <h1>리액트 페이지네이션 예제</h1>
            {/* ul 태그 안에는 각 항목들의 제목이 보여질 것 */}
            <ul className='list-group mb-4'>
                {postList.map(post => (
                    <li key={post.id} className='list-group-item'>
                        {post.title}
                    </li>
                ))}
            </ul>
            {/* 페이지네이션 은 아래 페이지네이션 태그에서 동작 */}
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )

}
export default Board;