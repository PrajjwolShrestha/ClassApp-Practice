import React from 'react'
import {View,Text,Button} from 'react-native'

export const Start = (props) => {
    if( props.correct == true){
        return(
            <View>
                <Button title ="Restart"/>
            </View>
        )
    }
    else{
        return null
    }
}

