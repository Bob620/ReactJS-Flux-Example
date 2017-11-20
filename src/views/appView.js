import React, {Component} from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>Tasks List</h1>
    </header>
  );
}

function Main(props) {
  if (props.tasks.size === 0) {
    return null;
  }
  return (
    <section id="main">
      <ul id="taskList">
        {[...props.tasks.values()].reverse().map(task => (
          <li key={task.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={task.complete}
                onChange={() => props.onToggleTask(task.id)}
              />
              <input
                className="taskText"
                value={task.text}
                onChange={() => props.onUpdateTask(task.id)}
              />
              <button
                className="destroy"
                onClick={() => props.onRemoveTask(task.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AppView;