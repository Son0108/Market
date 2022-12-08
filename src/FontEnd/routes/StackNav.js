import Register from "../Register/Register";
import Login from "../Login/Login";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterSuccess from "../Register/RegisterSuccess";
import Tabs from "../Screen/Tabs";
import ShoppingCart from "../Screen/Shopping/ShoppingCart";
import NewProduct from "../Screen/Product/NewProduct";
import DetailProduct from "../Screen/Product/DetailProduct";
import ModifyProduct from "../Screen/Product/ModifyProduct";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Login} />
      <Stack.Screen name="App" component={Tabs}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess}/>
      <Stack.Screen name="Shoppingcart" component={ShoppingCart}/>
      <Stack.Screen name="Newproduct" component={NewProduct}/>
      <Stack.Screen name="Detailproduct" component={DetailProduct}/>
      <Stack.Screen name="Modifyproduct" component={ModifyProduct}/>
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