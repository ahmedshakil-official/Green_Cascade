import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSeparator() {
    return (
        <View style={styles.saperator}></View>
    );
}

const styles = StyleSheet.create({
    saperator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light
    }
})

export default ListItemSeparator;