import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, TextInput, View} from 'react-native';

import Styles from '../styles/DefaultStyle.js'
import Button from '../components/DefaultButton.js'

const LoginPage = function (){
    return (
        <View onPress="" style={(Styles.wrapper)}>
            <StatusBar style="dark"/>
            <Image source={require('../images/logo.jpg')} style={(Styles.logo)}></Image>
            <TextInput placeholder="Email" style={(Styles.textbox)}></TextInput>
            <TextInput placeholder="Password" style={(Styles.textbox)}></TextInput>

            <Button>Login</Button>

        </View>
    );
}

export default LoginPage;
