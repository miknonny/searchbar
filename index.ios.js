/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var RightCorner = require('./App/RightCorner')
var Home = require('./App/Home');

var firstRoute = {
  name: 'Home',  // title
  component: Home,
  rightCorner: RightCorner,
}

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


class nativerouter extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Router firstRoute={firstRoute}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nativerouter', () => nativerouter);
