import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogoApp} from '../components/LogoApp';
import Icon from 'react-native-vector-icons/Feather';
import {Main} from '../pages/Main';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem label="home" onPress={() => props.navigation.closeDrawer()} />
    </DrawerContentScrollView>
  );
};

//? Tab navigator for bottom navigation
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#000'}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color={'black'} />,
        }}
        component={Main}
      />
      <Tab.Screen
        name="Carrito"
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-cart" size={24} color={'black'} />
          ),
        }}
        component={Main}
      />
      <Tab.Screen
        name="Favoritos"
        options={{
          tabBarIcon: () => <Icon name="heart" size={24} color={'black'} />,
        }}
        component={Main}
      />
      <Tab.Screen
        name="Tienda"
        options={{
          tabBarIcon: () => (
            <Icon name="shopping-bag" size={24} color={'black'} />
          ),
        }}
        component={Main}
      />
    </Tab.Navigator>
  );
};

//? Tab navigator for sidePanel navigation
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="main"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: props => <LogoApp />,
        headerRight: () => (
          <Icon
            name={'log-out'}
            color={'black'}
            size={26}
            style={{marginRight: 16}}
          />
        ),
        headerShown: true,
      }}>
      <Drawer.Screen name="BottomTabsStack" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
};

export default Routes;
