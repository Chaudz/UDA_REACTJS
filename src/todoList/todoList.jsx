import React, { useState } from 'react';
import { Stack, TextField, Typography, Button, FormControl, FormHelperText } from '@mui/material';
import Todo from './todo';

const dataInit = [
  { id: 1, name: 'go shopping', status: 'done' },
  { id: 2, name: 'đi chợ', status: 'inProgress' },
  { id: 3, name: 'Di an', status: 'done' },
];
function TodoList(props) {
  const [errCreateInput, setErrCreateInput] = useState('');
  const [errUpdateInput, setErrUpdateInput] = useState('');
  const [closeBtnCreateBox, setCloseBtnCreateBox] = useState('close-btnCreateBox hidden');
  const [closeBtnUpdateBox, setCloseBtnUpdateBox] = useState('close-btnUpdateBox hidden');
  const [closeBtnDeleteBox, setCloseBtnDeleteBox] = useState('close-btnDeleteBox hidden');
  const [data, setData] = useState(dataInit);
  const [todoStatus, setTodoStatus] = useState('all');
  const [keyWord, setKeyWord] = useState('');
  const [bgColorAllBtn, setBgColorAllBtn] = useState('red');
  const [bgColorDoneBtn, setBgColorDoneBtn] = useState('');
  const [bgColorProgressBtn, setBgColorProgressBtn] = useState('');
  const [valueNewTodo, setValueNewTodo] = useState('');
  const [overlay, setOverlay] = useState('overlay hidden');
  const [valueNewUpdate, setValueNewUpdate] = useState('');
  const [idUpdate, setIdUpdate] = useState(0);
  const [idDelete, setIdDelete] = useState(0);

  function setStatusTodo(status) {
    setTodoStatus(status);
  }

  function searchKeyWord(keyWord) {
    setKeyWord(keyWord);
  }

  function filterTodos() {
    if (todoStatus === 'all') {
      return data.filter((todo) =>
        todo.name.toLowerCase().replaceAll(' ', '').includes(keyWord.toLowerCase().replaceAll(' ', '')),
      );
    } else {
      return data.filter((todo) => todo.name.toLowerCase().includes(keyWord.toLowerCase()) && todo.status === todoStatus);
    }
  }

  function handleClickTodoName(id) {
    let newData = data.map((todo) =>
      todo.id === id ? (todo.status === 'done' ? { ...todo, status: 'inProgress' } : { ...todo, status: 'done' }) : todo,
    );
    setData(newData);
  }

  function resetBgColorNavBtns() {
    setBgColorAllBtn('#1976d2');
    setBgColorDoneBtn('#1976d2');
    setBgColorProgressBtn('#1976d2');
  }

  function addBgColorAllBtn() {
    setBgColorAllBtn('red');
    console.log(bgColorAllBtn);
  }

  function addBgColorDoneBtn() {
    setBgColorDoneBtn('red');
  }

  function addBgColorProgressBtn() {
    setBgColorProgressBtn('red');
  }

  function handleSaveTodo(id) {
    let newData = data.map((todo) => (todo.id === idUpdate ? { ...todo, name: valueNewUpdate } : todo));
    setData(newData);
    setCloseBtnUpdateBox('close-btnUpdateBox hidden');
    setOverlay('overlay hidden');
  }

  function handleClickEditIcon(id) {
    setOverlay('overlay show');
    setCloseBtnUpdateBox('close-btnUpdateBox show');
    setIdUpdate(id);
  }

  function handleClickDeleteIcon(id) {
    setCloseBtnDeleteBox('close-btnDeleteBox show');
    setOverlay('overlay show');
    setIdDelete(id);
  }

  function handleDeleteData() {
    let newData = data.filter((todo) => todo.id !== idDelete);
    setData(newData);
    setOverlay('overlay hidden');
    setCloseBtnDeleteBox('close-btnDeleteBox hidden');
  }
  return (
    <Stack
      sx={{
        height: '400px',
        width: '400px',
        bgcolor: '#f4f4f4',
        p: 2,
        boxSizing: 'border-box',
        boxShadow: '1px 2px 11px 0px #613f3f',
        borderRadius: '10px',
      }}
    >
      <Typography color="#ef6c00" variant="h6" textAlign="center">
        TODO
      </Typography>
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 1 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Input search key"
          multiline
          maxRows={4}
          sx={{ display: 'flex', flex: 1 }}
          onChange={(e) => {
            searchKeyWord(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setCloseBtnCreateBox('close-btnCreateBox show');
            setOverlay('overlay show');
          }}
        >
          Create
        </Button>
      </Stack>
      <Stack sx={{ mt: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          sx={{
            width: '30%',
            fontSize: '10px',
            bgcolor: bgColorAllBtn,
            '&:hover': {
              backgroundColor: bgColorAllBtn,
            },
          }}
          onClick={() => {
            resetBgColorNavBtns();
            addBgColorAllBtn();
            setStatusTodo('all');
          }}
        >
          All
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '30%',
            fontSize: '10px',
            bgcolor: bgColorDoneBtn,
            '&:hover': {
              backgroundColor: bgColorDoneBtn,
            },
          }}
          onClick={() => {
            resetBgColorNavBtns();
            addBgColorDoneBtn();
            setStatusTodo('done');
          }}
        >
          Done
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '33%',
            fontSize: '10px',
            bgcolor: bgColorProgressBtn,
            '&:hover': {
              backgroundColor: bgColorProgressBtn,
            },
          }}
          onClick={() => {
            resetBgColorNavBtns();
            addBgColorProgressBtn();
            setStatusTodo('inProgress');
          }}
        >
          In-progress
        </Button>
      </Stack>
      <Stack sx={{ mt: 2, overflow: 'auto' }}>
        {filterTodos().map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            handleClickTodoName={handleClickTodoName}
            handleClickEditIcon={handleClickEditIcon}
            handleClickDeleteIcon={handleClickDeleteIcon}
            id={todo.id}
            status={todo.status}
          />
        ))}
      </Stack>
      {/* box create todo  */}
      <Stack
        className={closeBtnCreateBox}
        sx={{
          borderRadius: '10px',
          width: '200px',
          height: 'auto',
          p: '15px',
          bgcolor: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
        }}
      >
        <Typography sx={{ mb: 2 }}>Create new todo</Typography>
        <FormControl variant="standard">
          <TextField
            id="outlined-controlled"
            label="Enter todo"
            onChange={(e) => {
              setValueNewTodo(e.target.value.trim());
              if (e.target.value === '') {
                setErrCreateInput('please enter todo name!');
              } else {
                setErrCreateInput('');
              }
            }}
          />
          <FormHelperText sx={{ color: 'red', height: '20px' }} id="component-helper-text">
            {errCreateInput}
          </FormHelperText>
        </FormControl>
        <Stack sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            onClick={() => {
              if (valueNewTodo !== '') {
                let maxIdCurrent = Math.max(...data.map((todo) => todo.id));
                let newTodo = { id: maxIdCurrent + 1, name: valueNewTodo, status: 'inProgress' };
                data.push(newTodo);
                setCloseBtnCreateBox('close-btnCreateBox hidden');
                setOverlay('overlay hidden');
                setData(data);
              } else {
                setErrCreateInput('please enter todo name!');
              }
            }}
          >
            Create
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            onClick={() => {
              setCloseBtnCreateBox('close-btnCreateBox hidden');
              setOverlay('overlay hidden');
            }}
          >
            Close
          </Button>
        </Stack>
      </Stack>
      {/* box update todo */}
      <Stack
        sx={{
          borderRadius: '10px',
          width: '200px',
          height: 'auto',
          p: '15px',
          bgcolor: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
        }}
        className={closeBtnUpdateBox}
      >
        <Typography sx={{ mb: 2 }}>Update todo</Typography>
        <FormControl variant="standard">
          <TextField
            id="outlined-controlled"
            label="Enter new name!"
            onChange={(e) => {
              if (e.target.value === '') {
                setErrUpdateInput('please enter new name!');
              } else {
                setErrUpdateInput('');
              }
              setValueNewUpdate(e.target.value.trim());
            }}
          />
          <FormHelperText sx={{ color: 'red', height: '20px' }} id="component-helper-text">
            {errUpdateInput}
          </FormHelperText>
        </FormControl>
        <Stack sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            onClick={() => {
              if (valueNewUpdate !== '') {
                handleSaveTodo();
              } else {
                setErrUpdateInput('please enter new name!');
              }
            }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            onClick={() => {
              setCloseBtnUpdateBox('close-btnUpdateBox hidden');
              setOverlay('overlay hidden');
            }}
          >
            Close
          </Button>
        </Stack>
      </Stack>
      {/* box delete todo */}
      <Stack
        className={closeBtnDeleteBox}
        sx={{
          borderRadius: '10px',
          width: '200px',
          height: 'auto',
          p: '15px',
          bgcolor: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 200,
        }}
      >
        <Typography sx={{ mb: 2, fontWeight: 600 }}>Delete this todo</Typography>
        <Typography sx={{ fontSize: '13px' }}>
          Are you sure you want to delete this todo? This action cannot be undone
        </Typography>
        <Stack sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            onClick={() => {
              handleDeleteData();
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'red',
              '&:hover': {
                backgroundColor: 'red',
              },
            }}
            onClick={() => {
              setCloseBtnDeleteBox('close-btnDeleteBox hidden');
              setOverlay('overlay hidden');
            }}
          >
            Close
          </Button>
        </Stack>
      </Stack>
      {/* overlay */}
      <Stack
        className={overlay}
        sx={{ position: 'absolute', bgcolor: '#00000030', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }}
      ></Stack>
    </Stack>
  );
}

export default TodoList;
