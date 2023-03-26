import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listing = [
    {
        id: 1,
        title: 'American Hybicus',
        price: 100,
        image: require('../assets/background3.jpg')
    },
    {
        id: 2,
        title: 'Bangladeshi Hybicus',
        price: 30,
        image: require('../assets/background4.jpg')
    },
    {
        id: 3,
        title: 'Indian Hybicus',
        price: 50,
        image: require('../assets/background.jpg')
    },
]

function ListingScreen({navigation}) {
    return (
        <Screen style={styles.screen}> 
            <FlatList
            data={listing}
            keyExtractor={listing=>listing.id.toString()}
            renderItem={({item})=>
            <Card
            title={item.title}
            subTitle={"$"+item.price}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
             />
            }
             />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingScreen;