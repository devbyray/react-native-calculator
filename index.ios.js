/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBarIOS,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const { height, width } = Dimensions.get('window');

const calculatorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default class reactNativeCalulator extends Component {
    constructor(props) {
        super(props);

        this.clickMe = this.clickMe.bind(this);
        this.calculateSum = this.calculateSum.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.clearTotal = this.clearTotal.bind(this);
        this.state = {
            total: 0,
            history: []
        };

    }
    
    clickMe(input) {
        let newHistoryArray = this.state.history.slice();
        newHistoryArray.push(input);
        this.setState({history: newHistoryArray})
    }

    clearHistory() {
        console.log('history: ', this.state.history);
        this.setState({history: []});
        console.log('history: ', this.state.history);
    }

    clearTotal() {
        console.log('total: ', this.state.total);
        this.setState({total: 0});
        console.log('total: ', this.state.total);
    }

    calculateSum() {

        let sum = this.state.history.join('');
        let newHistory = eval(sum);
        let newHistoryArray = [];
        newHistoryArray.push(newHistory);

        this.setState({ history: newHistoryArray});
        this.setState({ total: eval(sum)});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.row, styles.row_top]}>
                    <View style={[styles.box__top]}>
                        <Text style={[styles.box__text_top]}>{this.state.total}</Text>
                    </View>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.box__top]}>
                        <Text style={[styles.box__text_top]}>{this.state.history}</Text>
                    </View>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clearTotal()}>
                        <Text style={styles.box__text}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clearHistory()}>
                        <Text style={styles.box__text}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box]} onPress={() => this.clickMe('%')}>
                        <Text style={styles.box__text}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft]} onPress={() => this.clickMe('*')}>
                        <Text style={styles.box__text}>&times;</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(7)}>
                        <Text style={styles.box__text}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(8)}>
                        <Text style={styles.box__text}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box]} onPress={() => this.clickMe(9)}>
                        <Text style={styles.box__text}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft]} onPress={() => this.clickMe('/')}>
                        <Text style={styles.box__text}>&divide;</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(4)}>
                        <Text style={styles.box__text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(5)}>
                        <Text style={styles.box__text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box]} onPress={() => this.clickMe(6)}>
                        <Text style={styles.box__text}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft]} onPress={() => this.clickMe('+')}>
                        <Text style={styles.box__text}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(1)}>
                        <Text style={styles.box__text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderRight]} onPress={() => this.clickMe(2)}>
                        <Text style={styles.box__text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box]} onPress={() => this.clickMe(3)}>
                        <Text style={styles.box__text}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft]} onPress={() => this.clickMe('-')}>
                        <Text style={styles.box__text}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row]}>
                    <TouchableOpacity  style={[styles.box, styles.box__half]} onPress={() => this.clickMe(0)}>
                        <Text style={styles.box__text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft, styles.box__oneThird]} onPress={() => this.clickMe(',')}>
                        <Text style={styles.box__text}>,</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.box, styles.box__borderLeft, styles.box__oneThird]} onPress={() => this.calculateSum()}>
                        <Text style={styles.box__text}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row_top: {
        paddingTop: 25,
        backgroundColor: 'black'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    box: {
        flex: 1,
        backgroundColor: '#333',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box__borderRight: {
        borderRightWidth: 2,
        borderRightColor: '#272822',
    },
    box__borderLeft: {
        borderLeftWidth: 2,
        borderLeftColor: '#272822'
    },
    box__oneThird: {
        flex: 1
    },
    box__twoThird: {
        flex: 2
    },
    box__oneFourth: {
        flex: 1
    },
    box__threeFourth: {
        flex: 3
    },
    box__half: {
        flex: 2
    },
    box__top: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    box__text_top: {
        fontSize: 48,
        textAlign: 'right',
        color: '#A6E22E',
    },
    box__text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#272822',
    }
});

AppRegistry.registerComponent('reactNativeCalulator', () => reactNativeCalulator);
