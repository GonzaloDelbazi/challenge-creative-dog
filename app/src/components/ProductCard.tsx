import {View, StyleSheet, ImageBackground, Text} from 'react-native';

export const ProductCard = ({item}: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.image}
        resizeMode="cover"
        source={{uri: item.image}}>
        {item.discount ? (
          <View style={styles.discCont}>
            <Text style={styles.discount}>-{item.discount}%</Text>
          </View>
        ) : (
          <></>
        )}
        <View style={styles.prizeCont}>
          <Text style={styles.prize}>
            {item.discount ? (
              <Text style={[styles.prize, styles.prizeThrough]}>
                ${item.prize}{' '}
              </Text>
            ) : (
              <></>
            )}
            ${item.prize}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.containerDesc}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 233.17,
    gap: 0,
    borderRadius: 8.29,
    margin: 2,
  },
  image: {
    width: 170,
    height: 170,
    gap: 0,
    borderTopLeftRadius: 4.15,
    borderTopRightRadius: 4.15,
  },
  containerDesc: {
    width: 170,
    height: 63.17,
    padding: 12.44,
    gap: 8.29,
    borderBottomStartRadius: 4.15,
    borderBottomEndRadius: 4.15,
  },
  name: {
    fontFamily: 'Raleway',
    fontSize: 14.51,
    fontWeight: '500',
    lineHeight: 14.51,
    textAlign: 'left',
  },
  desc: {
    fontFamily: 'Raleway',
    fontSize: 12.44,
    fontWeight: '500',
    lineHeight: 14.51,
    textAlign: 'left',
  },
  prizeCont: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    height: 19.15,
    paddingTop: 2.07,
    gap: 10.37,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4.15,
  },
  prizeThrough: {
    color: 'rgba(255, 94, 94, 1)',
    textDecorationLine: 'line-through',
  },
  discCont: {
    position: 'absolute',
    bottom: 20.15,
    left: 8,
    width: 42.29,
    height: 19.15,
    paddingVertical: 2.07,
    paddingHorizontal: 4.15,
    gap: 10.37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(5, 0, 255, 1)',
  },
  prize: {
    fontFamily: 'Barlow',
    fontSize: 14.51,
    fontWeight: '400',
    lineHeight: 14.51,
    textAlign: 'left',
    color: 'black',
  },
  discount: {
    fontFamily: 'Barlow',
    fontSize: 14.51,
    fontWeight: '400',
    lineHeight: 14.51,
    textAlign: 'center',
    color: '#fff',
  },
});
