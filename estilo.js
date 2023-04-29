import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    linha: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
    },
    botao: {
      borderRadius:60,
      borderWidth:1, borderColor:'#ff485b',
      backgroundColor: '#ff8da3',
      padding: 16, 
      margin: 20
    },
    caixa: {
      borderRadius:16, 
      borderWidth:1, borderColor:'black', 
      backgroundColor: '#daf3fb',
      padding: 16, margin: 20,
      minWidth: 200, maxWidth: 300
    },
});

export default styles;