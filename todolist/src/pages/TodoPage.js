import Header from "../component/Header";
import TodoEditor from "../component/TodoEditor";
import TodoList from "../component/TodoList";
import "./TodoPage.css";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Spring 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "독서하기",
    createdDate: new Date().getTime(),
  },
];

function TodoPage() {
  const { date } = useParams(); // url의 ":date" 부분에서 날짜 따옴
  const idRef = useRef(3); // Ref 객체는 리액트에서 주로 돔을 조작할 때 사용하지만, 컴포넌트의 변수로도 자주 활용한다.
  const [todo, setTodo] = useState(mockTodo);

  // 아이템 추가 함수
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current++;
  };

  // 아이템 체크 함수
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  // 아이템 삭제 함수
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  // 아이템 수정 함수
  const onEdit = (targetId, newContent) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="TodoPage">
      <Header date={date} />
      <TodoEditor onCreate={onCreate} />
      <TodoList
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default TodoPage;
