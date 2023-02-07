import { useState } from 'react';
import Alunos from './components/Alunos';

import UserProvider from './contexts/user';


function App() {
  
  return (
    <UserProvider>
      <div>
        <h1>Escola Udemy</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;
