import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") {
      return null;
    }
    const newToDo = {
      id: uuidv4(),
      text: newTask,
      isEditing: false,
    };
    setTasks((prevTasks) => [...prevTasks, newToDo]);
    setNewTask("");
  }
  function deleteTask(id){
    console.log(id)
const withoutDeletedTask = tasks.map(task => task.id !== id );
setTasks(withoutDeletedTask);
  }
  return (
    <div className="App">
      <div className="addTaskContainer">
        <input
          type="text"
          className="text"
          placeholder="What is the task today?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="addTask" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.text}
              <button className="edit-button">
                <FaEdit />
              </button>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                <MdDelete />
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
/*

Problem - we need to make a todo list. in this todo list, we have an input bar, adn when you type i words, then click addTask button which is adjacent to it,
then we lst of the task should go down below the input bar. this list of todo list should have an edit icon and delete icon buttons. When there delete button is clicked 
we delete that specific task, not all the ones with the same name. Then, when edit button is clicked, we a input bar should appear instead of the tasks, which
would already hav the text previously on the list and we would then be able to change it, click add task button adjacent to it  and then make that switch and 
show up as a todo task instead of previous one. 

breaking down the problem - ok,lets have a section container/whatever chatgpt recommends as the container which is returned from app.tsx. in app container we will 
have input bar, with button of AddTask next to it,both would be in addTask container, which we will then style out, using flexbox. We will have task state, that
will be updated to whatever is in input bar. it will be an array of objects, and each time task is added, we update it will new task object. the task object
will have id, using a dependency, text for the tasks test, and maybe an isEdit property. when is edit is true, we will instead render in another component, with input 
bar, which will take that text andd show it inside the text bar. then when add task is clicked,  we update that object to have that text, and change isEditing to false.
we will get icons from font awesome ,and we will download the package for it. when edit button si clicked, we will find object with same id, then change its isEditing 
to true. for delete button, we will hae a function called when it clicked, and that function is clicked, we willing that objects id din the array container, and 
then delete it from the array. 
After you are done with application, define ts. then, start writing test cases, just in word and then come back and finish writing test cases after Muhammad Ali helps 
you sort out your weather app test cases


lessons learnt  - 








*/
