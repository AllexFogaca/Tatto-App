import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Form from '../../components/Form'
import Title from '../../components/Title'

export default function Login(){
    return(
    <View style={styles.container}>
        <Form/>
        <Title/>
    </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
      paddingTop: 10,
    },
  });