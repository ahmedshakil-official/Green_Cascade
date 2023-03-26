import React from 'react';
import {Image, StyleSheet} from 'react-native'

import Screen from '../components/Screen';
import {AppFormField, AppForm, SubmitButton } from '../components/forms/index';

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
            style={styles.logo}
            source={require("../assets/logo2.png")}
            />
            <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
            >
                <AppFormField
                    autoCapitalized="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    
                    icon="email"
                    name="email"
                    placeholder="Email" 
                    textContentType="emailAddress"
                    />
                    <AppFormField
                    autoCapitalized="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    
                    placeholder="Password"
                    secureTextEntry={true} 
                    textContentType="password"
                    />
                    <SubmitButton
                    title="Login"
                    />
            </AppForm>
            
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;