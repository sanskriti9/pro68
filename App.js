import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import Fb from './screens/fb';
import In from './screens/in'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component{
  render(){
    return(
    
    <AppContainer/>
    
    )
  }
}
const TabNavigator = createBottomTabNavigator({
In:{screens : In},
Fb:{screens : Fb},
})
const AppContainer = createAppContainer(TabNavigator)