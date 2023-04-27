import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import {User} from './src/models/User';
import Home from './src/screens/Home';

const App = () => {
  const [username, setUsername] = useState('');

  return username ? (
    <Home />
  ) : (
    <Login isLogin={(user: User) => setUsername(user.username)} />
  );
};

export default App;
