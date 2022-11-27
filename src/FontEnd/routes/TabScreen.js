import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import BoxChat from '../Screen/BoxChat';
import HomeScreen from '../Screen/HomeScreen';
import Notice from '../Screen/Notice';
import Shop from '../Screen/Shop';
import UserProfile from '../Screen/UserProfile';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (
            <Image style={{width:20, height: 20}} source={require('../assets/Images/home.png')}/>
        )}}/>
        <Tab.Screen name="Shop" component={Shop} options={{
        tabBarIcon: () => (
            <Image style={{width:25, height: 25}} source={require('../assets/Images/shop.png')}/>
        )}}/>
        <Tab.Screen name="Chat" component={BoxChat} options={{
        tabBarIcon: () => (
            <Image style={{width:25, height: 25}} source={require('../assets/Images/message.png')}/>
        )}}/>
        <Tab.Screen name="Notice" component={Notice} options={{
        tabBarIcon: () => (
            <Image style={{width:30, height: 30}} source={require('../assets/Images/bell.png')}/>
        )}}/>
        <Tab.Screen name="User" component={UserProfile} options={{
        tabBarIcon: () => (
            <Image style={{width:25, height: 25}} source={require('../assets/Images/user2.png')}/>
        )}}/>
    </Tab.Navigator>
  );
}
const TabScreen = () => { 
    return (
            <Tabs />
    )
 }

 export default TabScreen;