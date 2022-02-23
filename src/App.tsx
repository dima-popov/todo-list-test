/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  Container, Card, CardContent, Divider, Checkbox, Stack, Button,
  Typography, TextField, Box, IconButton,
} from '@mui/material';
import { Delete, Create } from '@mui/icons-material';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

const list = [

 {
  date: {d: 1, y: 2, t: 3},
  text: 'text 1',
  ready: false,
  id: 1
    },
     {
      date: {d: 1, y: 2, t: 3},
      text: 'text 2',
      ready: false,
      id: 2
        },
        {
          date: {d: 1, y: 2, t: 3},
          text: 'text 3',
          ready: false,
          id: 3
            }

          ];

export function App(props: HelloWorldProps) {
  return (
    <Container sx={{ marginTop: '60px' }}>

      <Card variant="outlined" sx={{ width: 500, margin: 'auto' }}>
        <CardContent>
          <Typography variant="h6" component="h1">
            TodoList
          </Typography>
          <Divider />
          <br />
          <Stack spacing={2}>
    
        { list.map(function(element, i) {
            return (
            <div>
            <Box key={i} sx={{ display: 'flex'}}>
            <Box sx={{flexGrow: 1}}>
              <Typography variant="body1" component="span">
              {element.text}
              </Typography>
              </Box>
              <Box >
              <Checkbox />
              <IconButton aria-label="create" color="primary"><Create /></IconButton>
              <IconButton aria-label="delete" color="primary"><Delete /></IconButton>
              </Box>
        
              </Box>
              <Divider />
              </div>
              )

          })
          
          
          }

          
         
           

          </Stack>
          <br />
          <Divider />
          <br />
          <Box
            component="form"
          >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">ADD</Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
