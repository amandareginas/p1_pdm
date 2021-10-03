import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

class ExibeItens extends React.Component {

    render() {

        return (

            <View>
                {
                    this.props.itens && this.props.itens.length ? //TERNÁRIO
                        <FlatList
                            data={this.props.itens}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Text style={styles.txtList}>
                                            {item.descricao}
                                        </Text>
                                        <Text style={styles.txtList}>
                                            {item.fabricante}
                                        </Text>
                                    </View>
                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        :
                        <Text style={{ color: 'red' }}>
                            Nenhum item cadastrado.
                        </Text>
                }
            </View>

        )
    }

}

const styles = StyleSheet.create({
    txtList: {
        color: '#0079C8',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default ExibeItens;