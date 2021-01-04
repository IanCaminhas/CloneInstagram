import React, {Component} from  'react'
import Header from './src/components/Header'
import {View,Text} from  'react-native'
import Post from './src/components/Post'


export default class App extends Component{
  render(){

    const comments =[{
      nickname: 'João Elena Silva',
      comment: 'Excelente foto!'
    },{
      nickname: 'Rian Pereira',
      comment: 'Muito ruim! faço melhor hahahah'
    }]

    return (
      <View style={{flex:1}}>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')} 
        comments ={comments}/>
      </View>
  
      
    )

  }
}