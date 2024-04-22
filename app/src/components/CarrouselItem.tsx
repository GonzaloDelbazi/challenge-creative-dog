import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type props = {
  item: {
    name: string;
    stock: number;
    image: string;
  };
};

export const CarrouselItem = ({item}: props) => {
  return (
    <View style={styles.containerCard}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{borderRadius: 6.67}}>
        <View style={styles.containerDesc}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.stock}>{item.stock} productos</Text>
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.gradient}></LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    width: 280.87,
    height: 383.38,
    gap: 0,
    borderRadius: 6.67,
  },
  containerDesc: {
    width: 280.87,
    height: 166.69,
    top: 78,
    gap: 0,
    zIndex: 3,
  },
  name: {
    fontFamily: 'Raleway',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'left',
    color: '#fff',
    left: 20,
    top: 241.7,
    width: 240.86,
  },
  stock: {
    fontFamily: 'Raleway',
    fontSize: 11.67,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'left',
    color: '#fff',
    left: 20,
    top: 246.7,
    width: 240.86,
  },
  image: {
    width: 280.87,
    height: 383.38,
  },
  gradient: {
    position: 'absolute',
    width: 280.87,
    height: 166.69,
    top: 216.69,
  },
});
