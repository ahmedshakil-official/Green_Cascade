import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
        blurRadius={5}
        style={styles.background}
         source={require("../assets/background3.jpg")}>
                <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo2.png")} />
                <Text style={{
                    color:"white",
                    fontSize: 70,
                }}>Green Cascade</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={()=> navigation.navigate("Login")} />
                    <AppButton title="Register"  color='secondery' onPress={()=> navigation.navigate("Register")}/>
                
             </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logo: {
        width:200,
        height:200,
    },
    logoContainer: {
        position:'absolute',
        top:70,
        alignItems:'center',

    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    registerButton:{
        width: '100%',
        height: 70,
        backgroundColor:'#4ecdc4',
    },
})


export default WelcomeScreen;