var React = require('react-native');
var SearchPage = require('./SearchPage')
var SearchBar = require('./SearchBar');

var {
  Text,
  view
} = React;

class RightCorner extends React.Component {
  goToSearch () {
    var route = {
      name: '',
      component: SearchPage,
      titleComponent: SearchBar
    }
    this.props.toRoute(route);
  }
  render () {
    return (
      <Text onPress={this.goToSearch.bind(this)}>Search</Text>
    )
  }

}
module.exports = RightCorner;
