import Register from "../Register/Register";
import Login from "../Login/Login";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterSuccess from "../Register/RegisterSuccess";
import Tabs from "../Screen/Tabs";
import ShoppingCart from "../Screen/Shopping/ShoppingCart";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="App" component={Tabs}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess}/>
      <Stack.Screen name="Shoppingcart" component={ShoppingCart}/>
    </Stack.Navigator>
  );
}

const MainNav = () => { 
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
 }

 export default MainNav;