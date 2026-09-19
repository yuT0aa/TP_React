import {useEffect,useState} from 'react';
import TaskList from './TaskList';
import './App.css';

const App=() => {
  const[Tasks,setTasks]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response)=>response.json())
      .then((data)=>setTasks(data));
  },[]);

  const toggleTask=(id)=>{
    setTasks(Tasks.map(task=>task.id===id?{...task,completed:!task.completed}:task));
  };

  const deleteTask=(id)=>{
    setTasks(Tasks.filter(task=>task.id!==id));
  };

  return(
    <main className="App">
      <h1>Todos</h1>
      <TaskList tasks={Tasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </main>
  );
}

export default App;