/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import LoadingScreen from './loadingScreen/loadingScreen';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import LoginScreen from './loginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
      {!flag ? <LoadingScreen /> : <LoginScreen navigation={undefined} />}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen
          } />
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="colorLoading" component={colorLoadingScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
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

