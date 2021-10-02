
import React, { useState } from 'react'
import { View, TextInput, Button, Text, FlatList } from 'react-native'

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
                                        <Text>
                                            {item.descricao}
                                        </Text>
                                        <Text>
                                            {item.fabricante}
                                        </Text>
                                    </View>
                                )
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        :
                        <Text>
                            Nenhum item cadastrado
                        </Text>

                }


            </View>







        )
    }

}

export default ExibeItens;