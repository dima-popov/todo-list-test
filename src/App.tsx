/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  Container, Card, CardContent, Divider, Checkbox, Stack, Button,
  Typography, TextField, Box, IconButton, List, ListItem, Tooltip,
} from '@mui/material';
import { Delete, Create } from '@mui/icons-material';

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

const list:TodoList[] = [

  {
    date: new Date(),
    text: 'text 1',
    ready: false,
    id: Symbol(),
  },
  {
    date: new Date(),
    text: 'text 2',
    ready: false,
    id: Symbol(),
  },
  {
    date: new Date(),
    text: 'text 3',
    ready: false,
    id: Symbol(),
  },

];

function App(props: AppProps) {
  const [list_state, setList] = React.useState(list);
  const [input_state, setInput] = React.useState('');

  React.useEffect(() => {
    console.log(list_state);
  }, [list_state]);

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

            { list_state.map((elm, i) => (

              <ListItem key={i} sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Tooltip title={elm.date.getDate()} placement="top">
                    <Typography variant="body1" component="span">
                      {elm.text}
                    </Typography>
                  </Tooltip>
                </Box>
                <Box>
                  <Checkbox />
                  <IconButton aria-label="create" color="primary"><Create /></IconButton>
                  <IconButton aria-label="delete" color="primary"><Delete sx={{ color: 'red' }} /></IconButton>
                </Box>

              </ListItem>

            ))}

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
    setList([{
      text: input_state, ready: false, id: Symbol(), date: new Date(),
    }, ...list_state]);
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

export { App };
