import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const Button = ({children}, executable) => {

    const {bttText, btnPress} = styles;

    let touchProps = {
        activeOpacity: 1,
        underlayColor: btnPress.backgroundColor,
        style: styles.btnNormal,
        onPress: () => executable,
    };

    return (
        <TouchableHighlight {...touchProps}>
            <Text style={bttText}>
                {children}
            </Text>
        </TouchableHighlight>
    );
};

const styles = {
    btnNormal: {
        borderRadius: 10,
        backgroundColor: "#222",
        marginTop: 50,
        padding: 15
    },
    btnPress: {
        backgroundColor: "#F00",
    },
    bttText: {
        color: "#FFF",
        alignSelf: "center",
        fontSize: 20
    }

};
export default Button;


