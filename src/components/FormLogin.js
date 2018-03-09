import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

export default props => (

    <View style={styles.view}>

        <View style={styles.viewTopo}>
            <Text style={styles.txtWhatsapp}> WhatsApp Clone </Text>
        </View>

        <View style={styles.viewLogin}>
            <TextInput style={styles.txtLogin} placeholder='E-mail' />
            <TextInput style={styles.txtLogin} placeholder='Senha' />
            <Text style={styles.txtCadastro}>Ainda não tem cadastro? cadastre-se</Text>
        </View>

        <View style={styles.viewAcessar}>
            <Button
                title='Acessar'
                color='#115E54'
                onPress={() => false}
            />
        </View>

    </View>

);

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 10
    },
    viewTopo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewLogin: {
        flex: 2
    },
    viewAcessar: {
        flex: 2
    },
    txtWhatsapp: {
        fontSize: 25,
    },
    txtLogin: {
        fontSize: 20,
        height: 45
    },
    txtCadastro: {
        fontSize: 20
    }
});