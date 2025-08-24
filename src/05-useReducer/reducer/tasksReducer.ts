interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number };

export const getTaskInitialState = (): TaskState => {
    const storedStage = localStorage.getItem("tasks-state");
    return storedStage
        ? JSON.parse(storedStage)
        : {
              todos: [],
              length: 0,
              completed: 0,
              pending: 0,
          };
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };

        case "DELETE_TODO":
            const todoToRemove = state.todos.find((t) => t.id === action.payload);
            const wasCompleted = todoToRemove?.completed;
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload),
                length: state.todos.length - 1,
                pending: wasCompleted ? state.pending : state.pending - 1,
                completed: wasCompleted ? state.completed - 1 : state.completed,
            };
        case "TOGGLE_TODO":
            const updatedTodos = state.todos.map((t) => {
                if (t.id === action.payload) {
                    return { ...t, completed: !t.completed };
                }
                return t;
            });
            const completed = updatedTodos.filter((t) => t.completed).length;
            const pending = updatedTodos.length - completed;
            return {
                ...state,
                todos: updatedTodos,
                pending,
                completed,
            };
    }
    return state;
};
