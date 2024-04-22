import {View, Text, StyleSheet} from 'react-native';

export const LogoApp = () => (
  <View style={styles.container}>
    <View style={styles.containerC}>
      <Text style={styles.textC}>C</Text>
    </View>
    <Text style={styles.text}>Commerce</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerC: {
    width: 24,
    height: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(5, 0, 255, 1)',
    marginRight: 4,
  },
  textC: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'verdana',
  },
  text: {
    fontFamily: 'roboto',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
