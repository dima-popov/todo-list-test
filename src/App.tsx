import * as React from 'react';
import { ListForm } from './List';
import { Edit } from './Edit';
import {
    Routes,
    Route,
    HashRouter,
  } from 'react-router-dom';

function App(){

  return (

    <HashRouter>
    <Routes>
      <Route path="/" element={<ListForm />} />
      <Route path="/edit" element={<Edit />} />
      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
      )}
      />

    </Routes>

  </HashRouter>

  )

 }

 export { App };