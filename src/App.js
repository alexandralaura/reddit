import logo from './logo.svg';
import styles from  './App.module.css';
import React from 'react';

function App() {
  return (
    <>
    <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
