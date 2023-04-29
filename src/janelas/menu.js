import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../estilo';

const Menu = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
         <TouchableOpacity
            style={styles.botao}
            onPress={()=>{navigation.push('Janela2')}}
            >
              <Text style={{color: 'white'}}>Ir para Janela2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={()=>{navigation.push('Formulario')}}
            >
              <Text style={{color: 'white'}}>Ir para Formulario</Text>
          </TouchableOpacity>
        </View>
  </View>
    )
}

export default Menu;