/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  Container, Card, CardContent, Divider, Checkbox, Stack, Button,
  Typography, TextField, Box, IconButton, List, ListItem, Tooltip, listItemAvatarClasses,
} from '@mui/material';
import { Delete, Create } from '@mui/icons-material';

export interface AppProps {
  userName: string;
  lang: string;
}

function Edit(props: AppProps) {
  return (
    <Container sx={{ marginTop: '60px' }}>

      <Card variant="outlined" sx={{ width: 500, margin: 'auto' }}>
        <CardContent>

          <br />
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
              ADD
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export { Edit };
