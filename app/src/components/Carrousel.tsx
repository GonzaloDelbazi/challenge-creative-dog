import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import {CarrouselItem} from './CarrouselItem';
import {categoriesData} from '../../mocks/categories';

const {width} = Dimensions.get('screen');

export const Carrousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        renderItem={({item}) => <CarrouselItem item={item} />}
        keyExtractor={(item, index) => `${index}-${item.name}`}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        horizontal
        bounces={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 493.38,
    left: 15,
    top: 40,
    gap: 20,
  },
});
