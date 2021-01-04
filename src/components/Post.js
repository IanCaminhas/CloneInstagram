import React, {Component} from  'react'
import {StyleSheet, View, Image, Dimensions} from  'react-native'
import Author from './Author'


class Post extends Component {
    render(){
        return (
            <View style={StyleSheet.container}>
                <Image source={this.props.image} style={styles.image}/>
                <Author email='fulano@gmail.com' nickname='Fulano de tal' />
            </View>

        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width: Dimensions.get('window').width, //ocupar toda a largura
        height: Dimensions.get('window').height * 3/4, //ocupar 3/4 da altura
        resizeMode: 'contain'
    }    

})


export default Post



