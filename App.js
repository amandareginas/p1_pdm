import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import EntradadeDados from './src/EntradaDeDados/index'
import ExibeItens from './src/ExibeItens/index'

export default function App() {

  const [itens, setItens] = useState([])

  function funcaoCadastrar (descricao, fabricante) {

    const item = {descricao, fabricante}
    setItens([...itens, item])
  }

  return (
    <View style={styles.container}>
      <EntradadeDados funcaoCadastrar={ funcaoCadastrar }/>
      <ExibeItens itens={itens}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});