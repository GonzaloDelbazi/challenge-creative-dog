import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Grid} from '../components/Grid';

const {width} = Dimensions.get('screen');

export const Products = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contDesc}>
        <Text style={styles.title}>
          Productos <Text style={{color: '#0500FF'}}>destacados</Text>
        </Text>
        <Text style={styles.desc}>
          ¡Descubre nuestros productos estrella! Encuentra lo mejor en
          tecnología y accesorios para simplificar tu vida.
        </Text>
      </View>
      <Grid></Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  contDesc: {
    width: 344,
    gap: 16,
    left: 16,
  },
  title: {
    width: 322,
    fontFamily: 'Raleway',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'left',
    color: '#111827',
  },
  desc: {
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    textAlign: 'left',
    color: '#6B7280',
  },
  textButton: {
    fontFamily: 'Raleway',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'left',
    color: '#0500FF',
  },
});
