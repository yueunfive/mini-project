import React, { useState } from "react";
import styles from "../css/TodoItem.module.css";

function TodoItem(props) {
  let [checked, setChecked] = useState(false);
  let style1 = { color: "black" };
  let style2 = { color: "gray", textDecorationLine: "line-through" };

  // 삭제 기능 (체크박스 연동)
  // 아이템을 삭제할 때 로컬 스토리지에서도 해당 아이템을 제거
  const deleteItem = () => {
    const updatedTodoList = props.todoList.filter(
      (_, index) => index !== props.i
    );
    props.setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  // 수정 기능
  const changeItem = () => {
    if (props.inputValue != "") {
      let copy = [...props.todoList];
      copy.splice(props.i, 1, props.inputValue);
      props.setTodoList(copy);
    }
  };

  return (
    <div className={styles.todoItem}>
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <span style={checked ? style2 : style1}>{props.item}</span>
      </div>
      <div>
        <button
          className={styles.modify}
          onClick={() => {
            changeItem();
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            deleteItem();
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
// 질문 : hidden으로 삭제하면 위에 눈으로만 안보이고 todoList 배열에는 아직 남아있는거 아닌가?
export default TodoItem;
