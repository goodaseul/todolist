import { Todo } from "../types";

interface TodoListProps {
    todos: Todo[];
    removeTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
    saveTodo: () => void;
    startEditing: (id: number, text: string) => void;
    editingTodoId: number | null;
    editingText: string | number;
    setEditingTodoId: React.Dispatch<React.SetStateAction<number | null>>;
    setEditingText: React.Dispatch<React.SetStateAction<string>>; // setEditingText의 타입을 명확히 지정
}

const TodoList: React.FC<TodoListProps> = ({ removeTodo, toggleComplete, saveTodo, startEditing, editingTodoId, editingText, setEditingText, setEditingTodoId, todos }) => {
    return (
        <ul className="listbox">
            {/* 부모 요소인 <ul> 추가 */}
            {todos.map((todo) => (
                <li key={todo.id}>
                    우선 순위 : {todo.priority}&nbsp; | &nbsp;
                    {editingTodoId === todo.id ? (
                        <>
                            <input type="text" value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                            <div className="wrap_edit">
                                <button onClick={saveTodo}>저장</button>
                                {/* 수정 모드 종료 */}
                                <button onClick={() => setEditingTodoId(null)}>취소</button>
                            </div>
                        </>
                    ) : (
                        // null일 때
                        <>
                            <p style={{ textDecoration: todo.completed ? "line-through #e2725b" : "none" }}>{todo.text}</p>
                            {/* 수정 버튼을 누를시  
                                수정 버튼을 누른 Todo의 ID와 기존 텍스트를 받아와서
                            */}
                            <div className="wrap_edit">
                                <button onClick={() => startEditing(todo.id, todo.text)}> 수정 </button>
                                <button onClick={() => toggleComplete(todo.id)}> 완료 </button>
                                <button onClick={() => removeTodo(todo.id)}> Remove</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
