import React, {Component} from "react";

import {Image, TextInput, View} from "react-native";

import Styles from '../styles/DefaultStyle.js'
import Button from '../components/DefaultButton.js'


class Login extends Component {

    Login() {}

    render() {
        return <View style={(Styles.wrapper)}>
            <Image source={require('../images/logo.jpg')} style={(Styles.logo)}></Image>
            <TextInput placeholder="Email" style={(Styles.textbox)}></TextInput>
            <TextInput placeholder="Password" style={(Styles.textbox)}></TextInput>
            <Button>Login</Button>
        </View>
    }

}

export default Login.function ()
