/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  Container, Card, CardContent, Divider, Stack, Button,
  TextField, Typography,
} from '@mui/material';

export interface AppProps {
  userName: string;
  lang: string;
}

function Edit(props: AppProps) {
  return (
    <Container sx={{ marginTop: '60px' }}>

      <Card variant="outlined" sx={{ width: 500, margin: 'auto', backgroundColor: '#fffe92' }}>
        <CardContent>

          <Typography variant="h6" component="h1">
            TodoList
          </Typography>
          <Divider />
          <br />
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              label="new task"
              variant="outlined"
            />
            <Button
              variant="contained"
            >
              Save
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export { Edit };
