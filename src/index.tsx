import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  HashRouter,
} from 'react-router-dom';

import { ListForm } from './List';
import { Edit } from './Edit';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<ListForm userName="Developer" lang="TypeScript" />} />
      <Route path="/edit" element={<Edit userName="Developer" lang="TypeScript" />} />
      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
      )}
      />

    </Routes>

  </HashRouter>,

  document.getElementById('output'),
);
