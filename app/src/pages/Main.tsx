import {ScrollView} from 'react-native';
import {Home} from './Home';
import {Categories} from './Categories';
import {Products} from './Products';

export const Main = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Home />
      <Categories />
      <Products />
    </ScrollView>
  );
};
