import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: string
  text: string
  completed: boolean
}

type TodoState = {
  items: Todo[]
}

const initialState: TodoState = {
  items: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const newTodo: Todo = { id: Date.now().toString(), text: action.payload.text, completed: false }
      state.items.unshift(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      const t = state.items.find(i => i.id === action.payload.id)
      if (t) t.completed = !t.completed
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(i => i.id !== action.payload.id)
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const t = state.items.find(i => i.id === action.payload.id)
      if (t) t.text = action.payload.text
    },
    clearCompleted: state => {
      state.items = state.items.filter(i => !i.completed)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = todoSlice.actions
export default todoSlice.reducer
