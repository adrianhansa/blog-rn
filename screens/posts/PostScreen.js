import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'

const PostScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.postContainer}><Text style={styles.title}>Post</Text></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{},
    postContainer:{},
    title:{}
})

export default PostScreen
