import React from 'react';
import { TodoForm } from '../../ui/TodoForm';

function NewTodoPage() {
  return (
    <TodoForm
      label="Escribe tu nuevo TODO:"
    />
  );
}

export { NewTodoPage };
