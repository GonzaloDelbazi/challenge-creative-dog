import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Carrousel} from '../components/Carrousel';

const {width} = Dimensions.get('screen');

const padding = (a: number, b: number, c: number, d: number) => {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d : b !== undefined ? b : a,
  };
};

export const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyDesc}>
        <View style={styles.contDesc}>
          <Text style={styles.title}>
            Categorias más <Text style={{color: '#0500FF'}}>visitadas</Text>
          </Text>
          <Text style={styles.desc}>
            Descubre lo último en tecnología con nuestras categorías más
            populares. Encuentra lo que buscas en electrónica, informática y
            más.
          </Text>
        </View>
        <TouchableOpacity style={styles.contButton}>
          <Text style={styles.textButton}>Ver todas las categorías </Text>
          <Icon size={24} color={'#0500FF'} name={'keyboard-arrow-right'} />
        </TouchableOpacity>
      </View>
      <Carrousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    ...padding(25, 0, 0, 0),
  },
  bodyDesc: {
    width: 343,
    height: 260,
    left: 16,
    gap: 8,
  },
  contDesc: {
    width: 342,
    height: 204,
    gap: 20,
  },
  title: {
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
  contButton: {
    width: 232,
    height: 48,
    ...padding(12, 0, 0, 0),
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
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
