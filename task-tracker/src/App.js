import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"



function App() {
  const [tasks , setTasks ] = useState([
    {
        id: 0,
        text: 'Tech meetup',
        date: 'Feb 10th @1:30',
        reminder: 'true'

    },
    {
        id: 1,
        text: 'Class meetup',
        date: "Feb 25th @5:30",
        reminder: 'false'

    },
    {
        id: 2,
        text: 'work meeting',
        date: "March 12th @3:30",
        reminder: 'true'

    },
    {
        id: 3,
        text: 'opensource meetup',
        date: "March 19th @7:00",
        reminder: 'false'

    }

 ])

 //Add task

 const addTask = (task) => {
   console.log(task)
 }

 //Delete Task
 const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id)) 
 }

 //toggle reminder 
 const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
     task.id === id ? {...task, reminder: 
    !task.reminder} : task
   )
   )
 }

  return (
    <div className="container"> 
     <Header/>
     <AddTask onAdd={addTask}/>
{tasks.length > 0 ? (
<Tasks tasks={tasks} 
onDelete={deleteTask} 
onToggle={toggleReminder}
/>
) : (
  'No Task To Show'
  )}   </div>
  );
}


export default App;
