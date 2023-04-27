import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';

const App = () => {
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    handleGetUserNameFromAsyncStorage();
  }, []);

  const handleGetUserNameFromAsyncStorage = async () => {
    const res: any = await AsyncStorage.getItem('username');
    if (res) {
      setUsername(res);
      setIsLogin(false);
    } else {
      setIsLogin(false);
      console.log('Can not get username from async storage');
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('username').then(() => setUsername(''));
  };

  const onLogin = async (val: string) => {
    await AsyncStorage.setItem('username', val).then(() => setUsername(val));
  };

  return isLogin ? (
    <Splash />
  ) : username ? (
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={(val: string) => onLogin(val)} />
  );
};

export default App;
