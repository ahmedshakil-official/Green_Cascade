import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }

    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondery
        },
        targetScreen: "Messages",

    },
]

function AccountScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Ahmed Shakil" 
                subTitle="ovik.22sa@gmail.com"
                image={require('../assets/nokib.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList data={menuItems}
                keyExtractor={menuItem=> menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) =>
                <ListItem
                title={item.title}
                IconComponent={
                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                }
                onPress={()=> navigation.navigate(item.targetScreen)}
                 />
            }   
                ></FlatList>
            </View>
            <ListItem 
            title="Logout" 
            IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d" />
            }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor:colors.light
    },
    container: {
        marginVertical: 20,
    },
    
})

export default AccountScreen;