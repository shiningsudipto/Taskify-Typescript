import React, { useRef } from 'react'
import '../inputBox.css'
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div>
            <form
                className='input'
                onSubmit={(e) => {
                    handleAdd(e);
                    inputRef.current?.blur()
                }}
            >
                <input
                    className='input_box' type='input'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder='Enter Task' />
                <button type='submit' className='input_submit'>Go</button>
            </form>
        </div>
    )
}

export default InputField
