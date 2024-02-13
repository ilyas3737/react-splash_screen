import { StackActions } from '@react-navigation/native';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

class  SplashScreen extends Component{
    
  constructor(props){
    super(props);
    this.state = {};
  }

  

  componentDidMount(){
    setTimeout(()=> {
        console.log("home")
      this.props.navigation.dispatch(StackActions.replace('Home'))
    }, 5000);
  }
  

  render(){
      return (
        <View style={styles.container}>
          <Text style={{color: 'white', fontSize:'20px', fontWeight:700}}>Splash Screen</Text>
        </View>
      );
  }
}

export default SplashScreen;


