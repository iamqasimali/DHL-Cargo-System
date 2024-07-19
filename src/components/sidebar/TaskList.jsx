import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task title',
      description: 'Here is task one',
      status: 'To Do',
    },
    {
      id: 2,
      title: 'Task title',
      description: 'Here is task Two',
      status: 'To Do',
    },
    {
      id: 3,
      title: 'Task title',
      description: 'Here is task Three',
      status: 'To Do',
    },
    {
      id: 4,
      title: 'Task title',
      description: 'Here is task one',
      status: 'In Progress',
    },
    {
      id: 5,
      title: 'Task title',
      description: 'Here is task one',
      status: 'Completed',
    },
    {
      id: 6,
      title: 'Task title',
      description: 'Here is task Two',
      status: 'Completed',
    },
  ]);

  const handleToggleStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? 
        { ...task, status: task.status === 'Completed' ? 'To Do' : 'Completed' } 
        : task
    ));
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <div className="flex justify-between px-4 py-2 bg-white border-b border-gray-200">
        <h1 className="text-xl font-bold">TaskList</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Add task
        </button>
      </div>
      <div className="flex flex-col px-4 pt-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold">To Do's ({tasks.filter((task) => task.status === 'To Do').length})</h2>
          {tasks
            .filter((task) => task.status === 'To Do')
            .map((task) => (
              <div key={task.id} className="bg-white p-2 rounded shadow-md mb-2 flex items-center">
                <input
                  type="checkbox"
                  checked={task.status === 'Completed'}
                  onChange={() => handleToggleStatus(task.id)}
                  className="mr-2"
                />
                <div>
                  <h3 className="text-base font-bold">{task.title}</h3>
                  <p className="text-sm">{task.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold">In Progress ({tasks.filter((task) => task.status === 'In Progress').length})</h2>
          {tasks
            .filter((task) => task.status === 'In Progress')
            .map((task) => (
              <div key={task.id} className="bg-white p-2 rounded shadow-md mb-2 flex items-center">
                <input
                  type="checkbox"
                  checked={task.status === 'Completed'}
                  onChange={() => handleToggleStatus(task.id)}
                  className="mr-2"
                />
                <div>
                  <h3 className="text-base font-bold">{task.title}</h3>
                  <p className="text-sm">{task.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div>
          <h2 className="text-lg font-bold">Completed ({tasks.filter((task) => task.status === 'Completed').length})</h2>
          {tasks
            .filter((task) => task.status === 'Completed')
            .map((task) => (
              <div key={task.id} className="bg-white p-2 rounded shadow-md mb-2 flex items-center">
                <input
                  type="checkbox"
                  checked={task.status === 'Completed'}
                  onChange={() => handleToggleStatus(task.id)}
                  className="mr-2"
                />
                <div>
                  <h3 className="text-base font-bold">{task.title}</h3>
                  <p className="text-sm">{task.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
