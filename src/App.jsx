import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import CustomBox from './components/CustomBox';

function App() {
  // localStorageからtodosを取得
  const saveTodos = () => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  };

  const [todos, setTodos] = useState(saveTodos());

  // todos更新時にはlocalStorageを更新
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todoを追加
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      deadLine: getTomorrowDate(),
      completed: false,
      priority: 1
    }
    setTodos([...todos, newTodo]);
  };

  // todoを削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 完了切替
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    }))
  };

  // 絞り込みstatus
  const [filterStatus, setFilterStatus] = useState("all");

  // 絞り込み適用後のtodos
  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "active") return !todo.completed;
    if (filterStatus === "completed") return todo.completed;
    return true;
  });

  // 納期の更新
  const updateDeadLine = (id, deadLine) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, deadLine } : todo;
    }));
  }

  // localStorageから並び替えstatusの取得
  const saveSort = () => {
    const sort = localStorage.getItem("sort");
    return sort ? sort : "deadLine";
  };

  // 並び替えstatus
  const [sortStatus, setSortStatus] = useState(saveSort());

  // 並び替えstatus更新時にlocalStorage更新
  useEffect(() => {
    localStorage.setItem("sort", sortStatus);
  }, [sortStatus]);

  // 並び替えたfilteredTodos
  const sortedTodos = () => {
    if (sortStatus === "deadLine") {
      return [...filteredTodos].sort((a, b) => {
        const dif = new Date(a.deadLine) - new Date(b.deadLine);
        if (dif === 0) return b.priority - a.priority;
        return dif;
      });
    }
    if (sortStatus === "regist") {
      return [...filteredTodos].sort((a, b) => {
        const dif = a.id - b.id;
        if (dif === 0) return b.priority - a.priority;
        return dif;
      });
    }
    if (sortStatus === "name-up") {
      return [...filteredTodos].sort((a, b) => {
        const dif = a.text - b.text;
        if (dif === 0) return b.priority - a.priority;
        return dif;
      });
    }
    if (sortStatus === "name-down") {
      return [...filteredTodos].sort((a, b) => {
        const dif = b.text - a.text;
        if (dif === 0) return b.priority - a.priority;
        return dif;
      });
    }
    if (sortStatus === "priority") {
      return [...filteredTodos].sort((a, b) => {
        const dif = b.priority - a.priority;
        if (dif === 0) return new Date(a.deadLine) - new Date(b.deadLine);
        return dif;
      });
    }
    return filteredTodos;
  }

  // 優先度の更新
  const updatePriority = (id, priority) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, priority } : todo;
    }));
  };

  return (
    <>
      <h1>TODOリスト</h1>
      <TodoForm addTodo={addTodo} />
      <CustomBox filterStatus={filterStatus} setFilterStatus={setFilterStatus} sortStatus={sortStatus} setSortStatus={setSortStatus} />
      <TodoList
        todos={sortedTodos()}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        updateDeadLine={updateDeadLine}
        updatePriority={updatePriority}
      />
    </>
  )
}

// 翌日の日付を返す
function getTomorrowDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default App