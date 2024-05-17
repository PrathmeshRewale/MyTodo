import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { BlurView } from 'expo-blur';

interface TodoProps {
    id:number
    title: string;
    completed: boolean;
}

const Todo = ({ id,title,completed }: TodoProps) => {
    return (
        <BlurView intensity={50} style={[styles.blurContainer,styles.glassEffect]}>

            <BouncyCheckbox isChecked={completed} />
                <Text style={[styles.title,completed && {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{title}</Text>
 
        </BlurView>
    )
}

export default Todo

const styles = StyleSheet.create({
    blurContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
      },
    title: {
        color: 'white',
        textAlign: 'left',
        padding: 10,
        fontSize: 20,
        flexWrap: 'wrap',
        flex: 1,
    },
    container: {
        margin: 10,
    },
    glassEffect: { 
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'

    }
})