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
import styles from './estilo';

const Stack = createNativeStackNavigator();


//Janela 2
const Janela2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Segunda Janela</Text>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('Formulario')}}
        style={styles.botao}
        >
        <Text>ACESSAR FORMULÁRIO</Text>
      </TouchableOpacity>
    </View>
  )
}

const Janela3 = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={()=>{navigation.push('Janela4')}}
        >
          <Text style={{color: 'white'}}>Confirmar Dados</Text>
        </TouchableOpacity>
    </View>
  )
}

const Janela4 = () =>{
  return(
    <View style={styles.container}>
      <Text>Confirmação de dados</Text>
    </View>
  )
}

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
          <Stack.Screen name="Janela4" component={Janela4}/>
          <Stack.Screen name="ConfirmarDados" component={ConfirmarDados}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}