import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> Tareas
    </h2>
  );
}

export { TodoCounter };