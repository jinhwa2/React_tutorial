import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); //빈 배열로 설정
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([[...todos], { text: input, completed: false }]); //기존에 작성된 할 일 복제 후 추가
    setInput("");
  };

  const toggleTodo = (index) => {
     const newTodos = [...todos]; //새로운 살일 추가
  }
}
