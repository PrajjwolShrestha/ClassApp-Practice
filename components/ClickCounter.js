import React, { useState } from 'react';
import {View,Text,TouchableOpacity, StyleSheet } from 'react-native';

//components can have two elements : one is state which can change overtime
//component can have also props which do not change

export const ClickCounter = (props) => {
    const[click,updateClick] = useState(0); //useState is called hook
    //using useState function we can keep track how many times its been clicked


    return (
        <View>
            <TouchableOpacity onPress={() => {updateClick(click + 1)}} style={styles.button}>
                <Text style={styles.text}>
                    I have been clicked. {click}
                </Text>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create(
    {
        button:{
            minWidth:250,
            backgroundColor:'#3333ff',
            padding:15,
            margin:10
        },
        text:{
            color:'white',
            textAlign:'center',
            fontSize:25


        }

    }
)


