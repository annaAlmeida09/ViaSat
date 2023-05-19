/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import LoadingScreen from './loadingScreen/loadingScreen';
import React, { useEffect, useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import LoginScreen from './loginScreen/LoginScreen';

const App = () => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 5150);
    //5150
  }, []);
  return (
    <ThemeProvider theme={styles}>
      {!flag ? <LoadingScreen /> : <LoginScreen />}
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'blue',
  },
});
export default App;
