import React, { useState } from "react";

interface TodoInputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>; // setInputValue의 타입을 명확히 지정
    handleAddTodo: () => void; // handleAddTodo의 타입을 함수로 명확히 지정
}

const TodoInput: React.FC<TodoInputProps> = ({ inputValue, setInputValue, handleAddTodo }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    return (
        <div className="inputbox">
            <input type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e) => setInputValue(e.target.value)} placeholder="할 일을 적어주세요." />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoInput;
