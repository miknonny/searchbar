var React = require('react-native');

var {
  StyleSheet,
  TextInput
} = React;

class SearchBar extends React.Component {
  render () {
    return (
      <TextInput style={styles.input}
        onChangeText={''}
        placeholder="Search here" placeholderColor="#FFF"
      />
    )
  }
}

var styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4
  }
});

module.exports = SearchBar;
