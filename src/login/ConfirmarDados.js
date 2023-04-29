import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../estilo';

const ConfirmarDados = () => {
    return (
        <ScrollView>
            <View style={styles.container} >
                <TouchableOpacity
                onPress={()=>{setClicou(true)}}
                style={styles.botao}
                >
                <Text>Confirmar Dados</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ConfirmarDados;