import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import './style.css';

Todo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  handleClickTodoName: PropTypes.func,
  status: PropTypes.string,
  handleClickEditIcon: PropTypes.func,
  handleClickDeleteIcon: PropTypes.func,
};

function Todo(props) {
  const { name, id, handleClickTodoName, status, handleClickEditIcon, handleClickDeleteIcon } = props;

  return (
    <Stack
      sx={{
        mt: 1,
        p: '3px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #c5b2b2',
        borderRadius: '5px',
      }}
    >
      <Typography
        className={status}
        sx={{
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => {
          handleClickTodoName(id);
        }}
      >
        {name}
      </Typography>
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <Button
          variant="contained"
          sx={{
            minWidth: '20px',
            width: '40px',
            p: '6px',
            backgroundColor: '#de002e',
            '&:hover': {
              backgroundColor: '#de002e',
            },
          }}
          onClick={() => {
            handleClickDeleteIcon(id);
          }}
        >
          <DeleteIcon sx={{ color: '#ffffff' }}></DeleteIcon>
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: '20px', width: '40px', p: '6px', backgroundColor: '#1976d2' }}
          onClick={() => {
            handleClickEditIcon(id);
          }}
        >
          <ModeEditOutlineIcon sx={{ color: '#ffffff' }}></ModeEditOutlineIcon>
        </Button>
      </Stack>
    </Stack>
  );
}

export default Todo;
