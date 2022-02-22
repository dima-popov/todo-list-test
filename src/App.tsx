import * as React from "react";
import Button from '@mui/material/Button';
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div>
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
  <Button variant="contained">Hello World</Button>
  </div>
);
