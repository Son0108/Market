import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "../Screen/Tabs";
import NewProduct from "../Screen/Product/NewProduct";
import ModifyProduct from "../Screen/Product/ModifyProduct";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import SignupSuccess from '../Auth/SignupSuccess';
import Order from '../Screen/Cart/Order';
import DetailOrder from '../Screen/Cart/DetailOrder';
import Messenger from '../Screen/Chat/Messenger';
import DetailProductOrder from '../Screen/OrderProduct/DetailProductOrder';
import DetailProductSale from '../Screen/SaleProduct/DetailProductSale';
import Home from '../Auth/Home';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="App" component={Tabs}/>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess}/>
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="OrderDetail" component={DetailOrder}/>
      <Stack.Screen name="Newproduct" component={NewProduct}/>
      <Stack.Screen name="Modifyproduct" component={ModifyProduct}/>
      <Stack.Screen name="Messenger" component={Messenger}/>
      <Stack.Screen name="DetailProductOrder" component={DetailProductOrder}/>
      <Stack.Screen name="DetailProductSale" component={DetailProductSale}/>
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