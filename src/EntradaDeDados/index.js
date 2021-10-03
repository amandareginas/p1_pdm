import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'


export default function EntradaDeDados({ funcaoCadastrar }) {

    const [descricao, setDescricao] = useState("")
    const [fabricante, setFabricante] = useState("")

    function pegarDescricao(paramDescricao) {
        setDescricao(paramDescricao)
    }

    function pegarFabricante(paramFabricante) {
        setFabricante(paramFabricante)
    }

    function limparCampos() {
        setDescricao("")
        setFabricante("")

    }

    return (

        <View>

            <Text style={styles.titulo}>
                Itens no combate à pandemia
            </Text>

            <TextInput
                style={styles.inputBox}
                placeholder="Descrição do item"
                onChangeText={pegarDescricao}
                value={descricao}
            />

            <TextInput
                style={styles.inputBox}
                placeholder="Fabricante"
                onChangeText={pegarFabricante}
                value={fabricante}
            />

            <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                    funcaoCadastrar(descricao, fabricante)
                    limparCampos()
                }
                }>
                <Text style={styles.txtBtn}>CADASTRAR</Text>
            </Pressable>

            <Text style={styles.listTitle}>
                Itens Cadastros
            </Text>


        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        textAlign: 'center',
        width: 180,
        padding: 15,
        flex: 1,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#0079C8',
        alignSelf: 'center',
    },

    buttonStyle: {
        backgroundColor: '#0079C8',
        borderRadius: 5,
        cursor: 'pointer',
        padding: 15,
        textAlign: 'center',
        width: 120,
        alignSelf: 'center',
    },

    txtBtn: {
        color: 'white',
        fontWeight: '500',
    },

    listTitle: {
        color: '#014F82',
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },
    titulo: {
        fontSize: 30,
        margin: 20,
    }
});
