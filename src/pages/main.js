import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default class Main extends Component {

    state = {
        alunos: []
    }

    componentDidMount() {
        this.loadAlunos();
    }

    loadAlunos = async () => {
        const response = await api.get('/alunos');

        this.setState({ alunos: response.data });
    }

    setStyleIndex(index) {
        var I = index;

        if (I > 4) {
            I = I - 5;
        }

        switch (I) {
            case 0:
                return {
                    backgroundColor: '#7ca2f3',
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                    marginTop: 1,
                }
            break;
        
            case 1:
                return {
                    backgroundColor: '#efa15d',
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                }
            break;
            case 2:
                return {
                    backgroundColor: '#ea5874',
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                }
            break;
            case 3:
                return {
                    backgroundColor: '#997ef4',
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                }
            break;
            case 4:
                return {
                    backgroundColor: '#68e1b9',
                    borderWidth: 1,
                    borderColor: '#DDD',
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                }
            break;
        }

    }

    renderItem = ({ item, index }) => (
        <View style={this.setStyleIndex(index)}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.semestre}>{item.semestre}º Semestre</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate('Detail', { user: item })
                }}
            >
                <Text style={styles.git}>{item.github}</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            < View style={styles.container} >
                <FlatList
                    contentContainerStyle={styles.item}
                    data={this.state.alunos}
                    KeyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        padding: 20
    },
    nome: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    semestre: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        lineHeight: 24
    },
    git: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        height: 42,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(195, 195, 195)',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10
    }
});