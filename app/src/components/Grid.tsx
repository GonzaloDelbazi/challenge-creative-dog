import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import {ProductCard} from './ProductCard';
import {productsData} from '../../mocks/products';

const {width} = Dimensions.get('screen');

export const Grid = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    paddingVertical: 57,
    gap: 4,
    alignItems: 'center',
  },
});
