import React, { useState } from "react";
import styles from "../css/Momentum.module.css";
import TodoList from "../components/TodoList";
import Weather from "../components/Weather";

export default function Momentum() {
  return (
    <div className={styles.Momentum}>
      <TodoList />
      <Weather />
    </div>
  );
}
