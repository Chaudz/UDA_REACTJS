import { Stack } from '@mui/material';
import './App.css';
import TodoList from './todoList/todoList';

function App() {
  return (
    <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative' }}>
      <TodoList />
    </Stack>
  );
}

export default App;
