import React from 'react'
import Todo from './todo';
const getTodos = async () => {
  let todos = await fetch("https://json-api-sand.vercel.app/api/todo/list");
  return todos.json();
};
async function TodoList() {
  const { todos } = await getTodos();
  return (
    
    <div>

    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((t: { id: React.Key | null | undefined;  name: any}) => {


        return (
          <li key={t.id} style={{ padding: "5px 0" }} className='bg-purple-900 w-80 mt-5 flex justify-between -ml-24  text-white border-x-purple-500 border-x-8 dark:bg-black/20 dark:border-x-gray-100'>

  <Todo todo={t} />
          </li>
        );
        
      })}
      
    </ul>
  </div>
  )
}

export default TodoList