import {View, Text, TextInput} from 'react-native'
import styles from '../../estilo';

const Entrada = (props) => {
    return(
        <View>
             <TextInput style={styles.caixa}
                placeholder={props.tipo}
                keyboardType='email-address'
                textContentType='telephoneNumber'
            />
        </View>
    )
}

export default Entrada;