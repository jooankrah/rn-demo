import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SocialIcon = ({Icon}) => {
    return (
        <View style={styles.container}>
            {Icon}
        </View>
    )
}

export default SocialIcon

const styles = StyleSheet.create({
    container:{
        padding: 20,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#f4f0ec',
        borderRadius:5,
        flexGrow: 1,
        margin:5
    },
})
