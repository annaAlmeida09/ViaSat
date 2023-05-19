/* eslint-disable prettier/prettier */

import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = ({ navigation }: { navigation: any }) => {

  return (
    <View>
      <ImageBackground
        source={require('./telaLogin.png')}
        style={styles.background} >
        <Image source={require('./ViasatLogoAzul.png')}
          style={styles.blueLogo} />
      </ImageBackground>
      <View>
        <Text style={styles.headerText}>
          Bem-vindo
        </Text>
        <Image source={require('./ViaSatLogoCor.png')} style={styles.colorLogo} />
        <View style={styles.oBox} />
      </View >
      <View>
        <Text style={styles.subHeaderText}>
          Entre em sua conta
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.userNameInput}
          placeholder="Usuário"
        />
        <TextInput
          style={styles.userPasswordInput}
          placeholder="Senha"
        />

      </View>
      <View>
        <Text style={styles.forgotPassword}>
          esqueci a senha
        </Text>
      </View>
      <View>
        <Button
          title="loading..."
          onPress={() => navigation.push('Details')}
        />
      </View>
    </View >
  );
};
const styles = StyleSheet.create({

  background: { width: '100%', height: '100%' },
  blueLogo: { width: 300, height: 73, marginTop: 700, marginLeft: -20 },
  headerText: {
    marginTop: -700,
    marginLeft: 850,
    fontFamily: 'Open Sans Hebrew',
    fontSize: 70,
    fontWeight: 'bold',
    color: '#202E39',
  },
  colorLogo: {
    marginLeft: 1220,
    marginTop: -83,
    height: 64,
    width: 80,
  },
  oBox: {
    width: 15,
    height: 5,
    marginLeft: 1197,
    marginTop: -22,
    backgroundColor: '#FFFFFF',
  },
  subHeaderText: {
    marginTop: -630,
    marginLeft: 854,
    fontFamily: 'Open Sans Hebrew',
    fontSize: 41,
    fontWeight: '100',
    color: '#202E39',
  },
  username: {
    width: 300,
    height: 73,
    color: 'black',
    marginTop: -900,
  },
  userNameInput: {
    height: 40,
    width: 400,
    marginLeft: 900,
    marginTop: -500,
    padding: 10,
    backgroundColor: '#9E9E9E',
    borderWidth: 0,
    borderRadius: 20,
  },
  userPasswordInput: {
    height: 40,
    width: 400,
    marginLeft: 900,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#9E9E9E',
    color: 'black',
    borderWidth: 0,
    borderRadius: 20,
  },
  forgotPassword: {
    color: '#8C8C8C',
    marginTop: -390,
    marginLeft: 1196,
    fontWeight: '100',
    fontStyle: 'italic',
  },
});

export default LoginScreen;
