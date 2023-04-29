import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,
  TouchableOpacity, TextInput, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import ConfirmarDados from './src/login/confirmarDados';
import Formulario from './src/login/Formulario'
import Menu from './src/janelas/menu';
import Janela2 from './src/janelas/janela2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
          <Stack.Screen name="Menu" component={Menu}
          options={{title: "Menu Principal",
            headerTintColor: '#37041C',
            statusBarColor: 'pink',
            navigationBarColor: '#ea337c'}}/>
          <Stack.Screen name="Janela2" component={Janela2}/>
          <Stack.Screen name="Formulario" component={Formulario}/>
          <Stack.Screen name="ConfirmarDados" component={ConfirmarDados}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}