
import React, {useState} from 'react'
import {View, TextInput, Button} from 'react-native'

export default function EntradaDeDados({funcaoCadastrar}) {
    
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
            <TextInput
            placeholder="descrição do item"
            onChangeText={pegarDescricao}
            value={descricao}
            />

            <TextInput
            placeholder="fabricante" 
            onChangeText={pegarFabricante}
            value={fabricante}
            />

            <Button
            title="Cadastrar"
            onPress={() => {
                funcaoCadastrar(descricao, fabricante)
                limparCampos()}
            }
            />
            
        </View>
    )
}
