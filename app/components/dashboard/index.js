import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput, Button} from 'react-native';
import Pickup from './../pickup';
import Header from '../header.js';
import Footer from '../footer.js';
import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'


import {Font} from 'expo';

export default class Dashboard extends Component {
    static navigationOptions =
        ({navigation}) => ({ //don't forget parentheses around the object notation
            tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: '#b2398b',
                },
            },
            title: "DASHBOARD",
            headerLeft: (
                <TouchableOpacity title='Back'
                                  onPress={ () => {
                                      navigation.push('MyBalance');
                                  }}>
                    <Image source={require('./../images/backarrow.png')}
                           style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            ),
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        })

    state = {
        fontLoaded: false,
    };


    async componentDidMount() {
        await Font.loadAsync({
            'GothamBold': require('../../../assets/fonts/GothamBold.ttf'),
            'GothamBook': require('../../../assets/fonts/GothamBook.ttf'),
            'GothamBookItalic': require('../../../assets/fonts/GothamBookItalic.ttf'),
        });
        this.setState({fontLoaded: true});
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flex: 1}}>
                    {
                        this.state.fontLoaded ? (
                            <View style={styles.withdrawSection}>
                                <Image source={require('../images/man01.png')} style={styles.avatarImage}/>
                                <View style={{paddingLeft: 35}}>
                                    <Text style={{fontWeight: 'bold', fontFamily: 'GothamBold'}}>John Doe</Text>
                                    <Text style={{fontFamily: 'GothamBook'}}>Mercedes CLA</Text>
                                    <Text style={{fontFamily: 'GothamBook'}}>SGP 138hu</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image source={require('../images/star_yellow.png')} style={styles.startStyle}/>
                                        <Text style={{fontFamily: 'GothamBook'}}>4.8</Text>
                                    </View>
                                </View>
                            </View>
                        ) : null
                    }

                    {
                        this.state.fontLoaded ? (
                    <View style={styles.detailSection}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{
                                marginLeft: 20, fontFamily: 'GothamBold', fontSize: 15,
                                textShadowColor: '#E91E63',
                                textShadowOffset: {width: 1, height: 4},
                                textShadowRadius: 5
                            }}>Scarlet
                                Johnson</Text>

                            <View style={{
                                marginLeft: 20,
                                backgroundColor: '#fccb32',
                                width: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                borderRadius: 5
                            }}>
                                <Image source={require('../images/star_white.png')} style={styles.imageFooter}/>
                                <Text style={{fontFamily: 'GothamBold', color: '#FFFFFF'}}>4.7</Text>
                            </View>
                        </View>
                        <Text style={{marginLeft: 20, fontFamily: 'GothamBook'}}>Booking ID: #212154</Text>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <Text style={{
                                marginLeft: 20,
                                fontFamily: 'GothamBold',
                                color: '#8c8c8c'
                            }}>13.2km</Text>
                            <Text style={{marginLeft: 20, fontFamily: 'GothamBold', color: '#f40000'}}>SGD
                                12.65</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>

                            <Image source={require('../images/redlight.png')} style={styles.imageFooter}/>

                            <View style={{marginLeft: 15}}>
                                <Text style={{fontSize: 10, fontFamily: 'GothamBold'}}>PICKUP LOCATION</Text>
                                <Text style={{fontFamily: 'GothamBook'}}>Eunos Road 8 #05-03 Singapore</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>

                            <Image source={require('../images/green_icon.png')} style={styles.imageFooter}/>

                            <View style={{marginLeft: 15}}>
                                <Text style={{fontSize: 10, fontFamily: 'GothamBold'}}>DROP-OFF LOCATION</Text>
                                <Text style={{fontFamily: 'GothamBook'}}>Eunos Road 8 #05-03 Singapore</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            paddingTop: 15,
                            elevation: 2
                        }}>
                            {/*<TouchableOpacity style={{*/}
                                {/*backgroundColor: 'red',*/}
                                {/*height: 35,*/}
                                {/*width: 150,*/}
                                {/*borderRadius: 10,*/}
                                {/*alignItems: 'center',*/}
                                {/*justifyContent: 'center',*/}
                                {/*shadowColor: 'rgba(0,0,0, .4)', // IOS*/}
                                {/*shadowOffset: { height: 1, width: 1 }, // IOS*/}
                                {/*shadowOpacity: 1, // IOS*/}
                                {/*shadowRadius: 1, //IOS*/}
                                {/*elevation: 5, // Android*/}
                            {/*}}>*/}
                                {/*<Text style={{*/}
                                    {/*fontSize: 10,*/}
                                    {/*fontFamily: 'GothamBold',*/}
                                    {/*color: '#FFFFFF'*/}
                                {/*}}>REJECT</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <AwesomeButton
                                cssModule={AwesomeButtonStyles}
                                type="twitter"
                            >
                                Share
                            </AwesomeButton>

                            <TouchableOpacity style={{
                                backgroundColor: 'green',
                                height: 35,
                                width: 150,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 10,
                                    fontFamily: 'GothamBold',
                                    color: '#FFFFFF',
                                }}>ACCEPT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                        ) : null
                    }

                    {
                        this.state.fontLoaded ? (
                    <View style={styles.paymentSections}>
                        <View>
                            <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                            <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                Credits</Text>
                        </View>
                        <Text style={{
                            color: 'gray',
                            paddingLeft: 130,
                            fontWeight: 'bold',
                            fontSize: 14,
                            paddingTop: 5,
                            fontFamily: 'GothamBook'
                        }}>1,254</Text>
                    </View>
                        ) : null
                    }


                    {
                        this.state.fontLoaded ? (
                    <View style={styles.paymentSections}>
                        <View>
                            <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                            <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                Credits</Text>
                        </View>
                        <Text style={{
                            color: 'gray',
                            paddingLeft: 130,
                            fontWeight: 'bold',
                            fontSize: 14,
                            paddingTop: 5,
                            fontFamily: 'GothamBook'
                        }}>1,254</Text>
                    </View>
                        ) : null
                    }

                    {
                        this.state.fontLoaded ? (
                    <View style={styles.paymentSections}>
                        <View>
                            <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                            <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                Credits</Text>
                        </View>
                        <Text style={{
                            color: 'gray',
                            paddingLeft: 130,
                            fontWeight: 'bold',
                            fontSize: 14,
                            paddingTop: 5,
                            fontFamily: 'GothamBook'
                        }}>1,254</Text>
                    </View>
                        ) : null
                    }

                </View>

            </View>

        );
    }

}

const styles = StyleSheet.create({
    buttonsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    paymentSections: {
        marginBottom: 8,
        height: 40,
        width: 325,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    avatarImage: {
        width: 70,
        height: 70
    },
    startStyle: {
        width: 20,
        height: 20
    },
    imageFooter: {
        width: 15,
        height: 15
    },
    regContainer: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        width: 280,
        height: 350,
        justifyContent: 'space-around',
        borderRadius: 10,
        marginLeft: 40,
        marginBottom: 90,
        marginTop: 5,

    }, //#f5f6f8
    container: {
        flex: 1,
        backgroundColor: '#f5f6f8',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //width:'80%',
        //height:'100%',
    },
    greenIconStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    footerIconStyle: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginBottom: 50
    },
    logoStyleHeart: {
        width: 20,
        height: 20,
        marginLeft: 90
    },
    logoContainer: {
        flex: 1,
        width: 40,
        height: 40,
        marginTop: 60,
        marginLeft: 40
    },
    withdrawSection: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop: 4,
        alignSelf: 'stretch',
        height: 100
    },
    historyTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'stretch',
        height: 25
    },
    detailSection: {
        width: 325,
        height: 200,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        marginTop: 10
    },
    sectionPaymentMethod: {
        alignSelf: 'stretch',
        height: 110,
        backgroundColor: '#FFFFFF',
        padding: 10
    },

    section6: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        height: 80,
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: '#FFFFFF',

    },
    section6Inner: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginTop: 5
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 40,
        borderRadius: 10,
        //margin: 10,
        shadowColor: '#555555',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderColor: '#dddddd',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        marginBottom: 10
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#424242',
        width: 300
    },
});
