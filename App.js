import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
