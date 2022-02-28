/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import './main.css';
import {
  Container, Card, CardContent, Divider, Checkbox, Stack, Button,
  Typography, TextField, Box, IconButton, List, ListItem, Tooltip, listItemAvatarClasses,
} from '@mui/material';
import { Delete, Create } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { store } from './store';

export interface AppProps {
  userName: string;
  lang: string;
}

function ListForm(props: AppProps) {
  const [listState, setList] = React.useState(store.getState().listValue);
  const [inputState, setInput] = React.useState('');
  const sortedList = listState;
  sortedList.sort((a, b) => b[0] - a[0]);
  store.subscribe(() => setInput(store.getState().inputValue));
  store.subscribe(() => {
    localStorage.setItem('todoList', JSON.stringify(store.getState().listValue));
    return setList(store.getState().listValue);
  });

  React.useEffect(() => {
    console.log(store.getState());
  }, [listState]);

  return (
    <Container sx={{ marginTop: '60px' }}>

      <Card variant="outlined" sx={{ width: 500, margin: 'auto', backgroundColor: '#fffe92' }}>
        <CardContent>
          <Typography variant="h6" component="h1">
            TodoList
          </Typography>
          <Divider />
          <br />
          <List>

            {
            sortedList.map((elmArr, i) => {
              const elm = elmArr[1];
              return (
                <ListItem key={i} sx={{ display: 'flex' }}>
                  <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <Tooltip title={elm.date} placement="top">
                      <Typography variant="body1" component="span">
                        {elm.ready === true ? <s>{elm.text}</s> : elm.text }
                      </Typography>
                    </Tooltip>
                  </Box>
                  <Box>

                    <Checkbox
                      checked={elm.ready}
                      onChange={(event) => { elm.ready = event.target.checked; store.dispatch({ type: 'list/update' }); }}
                    />
                    <Link to="/edit"><IconButton aria-label="create" color="primary"><Create /></IconButton></Link>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={(event) => { store.dispatch({ type: 'list/delete', payload: elm }); }}
                    >
                      <Delete sx={{ color: 'red' }} />
                    </IconButton>
                  </Box>

                </ListItem>
              );
            })
}

          </List>
          <br />
          <Divider />
          <br />
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="new task"
              variant="outlined"
              value={inputState}
              onChange={(event) => { store.dispatch({ type: 'input/update', payload: event.target.value }); }}
            />
            <Button
              variant="contained"
              onClick={
  () => {
    store.dispatch({ type: 'list/add' });
  }
 }
            >
              ADD
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>

  );
}

export { ListForm };
