import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('screen');

const padding = (a: number, b: number, c: number, d: number) => {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d : b !== undefined ? b : a,
  };
};

export const Home = () => {
  const img = {
    uri: 'https://s3-alpha-sig.figma.com/img/b70f/6376/4024554c2e141d6b2a710e601e7eb619?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jvhn8EUGWbyO40t7qIPQXlWSzbRcFf4uF4wOrRGdj2zwREgYcAVVAJPAhE0xtdYImSapeKscLQbEDyFI4w4JSdtPNYLGB2gukmzgeEeIktn7dqfjMdMTd6S3qiQ6Do5wWQPIlVdvnyBSFxawGVzqbSXKneOLnH20zHsBjjVHi8972y4gUSZammn1ktQ~20UNMuR0PlfX0RZYk9avf83SQGhkBOSlKOX-uVITBXgsT0J45csIPBQLh9XgKIWPBu26S2mzJkga1es~Ji15PBZH-E9i0X6bHJKuWM6h6cwBLDVgCiQIkHNzvweO83f8gV4dfU1O83z-eH8zmY19jhgNJQ__',
  };
  return (
    <View style={styles.containerStyle}>
      <ImageBackground style={styles.image} resizeMode="cover" source={img}>
        <View style={styles.container}>
          <View style={styles.containerBody}>
            <Text style={styles.textDesc}>
              Conecta tu mundo con la tecnología más avanzada
            </Text>
            <TouchableOpacity style={styles.contbutton}>
              <Text style={styles.textButton}>Ver productos </Text>
              <Icon size={24} color={'white'} name={'keyboard-arrow-right'} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width,
    maxHeight: 624,
    paddingBottom: 25,
  },
  image: {
    width: width * 1.8,
    height: 624,
    overflow: 'hidden',
  },
  container: {
    width: 343,
    height: 364,
    top: 192,
    left: 16,
    ...padding(129, 24, 39, 0),
  },
  containerBody: {
    width: 319,
    height: 196,
    gap: 28,
  },
  textDesc: {
    color: 'white',
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Raleway-VariableFont_wght',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  contbutton: {
    borderRadius: 8,
    padding: 12,
    gap: 10,
    height: 48,
    width: 188,
    backgroundColor: '#0500FF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Raleway-VariableFont_wght',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
});
