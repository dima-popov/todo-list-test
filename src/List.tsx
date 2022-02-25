/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  Container, Card, CardContent, Divider, Checkbox, Stack, Button,
  Typography, TextField, Box, IconButton, List, ListItem, Tooltip, listItemAvatarClasses,
} from '@mui/material';
import { Delete, Create } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export interface AppProps {
  userName: string;
  lang: string;
}

interface TodoList {
  text: string;
  id: symbol;
  date: Date,
  ready: boolean
}

const list:[number, TodoList][] = [

  [Date.now(), {
    date: new Date(),
    text: 'text 1',
    ready: true,
    id: Symbol(),
  }],
  [Date.now(), {
    date: new Date(),
    text: 'text 2',
    ready: false,
    id: Symbol(),
  }],
  [Date.now(), {
    date: new Date(),
    text: 'text 3',
    ready: false,
    id: Symbol(),
  }],

];

function ListForm(props: AppProps) {
  const [listState, setList] = React.useState(list);
  const [inputState, setInput] = React.useState('');
  const sortedList = listState;

  React.useEffect(() => {
    // console.log(listState);
    sortedList.sort((a, b) => b[0] - a[0]);
  }, [listState]);

  return (
    <Container sx={{ marginTop: '60px' }}>

      <Card variant="outlined" sx={{ width: 500, margin: 'auto' }}>
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
                    <Tooltip title={elm.date.toDateString()} placement="top">
                      <Typography variant="body1" component="span">
                        {elm.ready == true ? <s>{elm.text}</s> : elm.text }
                      </Typography>
                    </Tooltip>
                  </Box>
                  <Box>

                    <Checkbox
                      checked={elm.ready}
                      data-id={elm.id}
                      onChange={(event) => { elm.ready = event.target.checked; setList([...listState]); }}
                    />
                    <Link to="/edit"><IconButton aria-label="create" color="primary"><Create /></IconButton></Link>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={(event) => { setList([...listState.filter((e, i) => e[1] != elm)]); }}
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
              onChange={(event) => { setInput(event.target.value); }}
            />
            <Button
              variant="contained"
              onClick={
  () => {
    setList([[Date.now(), {
      text: inputState, ready: false, id: Symbol(), date: new Date(),
    }], ...listState]);
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
