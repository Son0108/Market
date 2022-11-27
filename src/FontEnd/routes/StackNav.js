import Register from "../Register/Register";
import Login from "../Login/Login";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterSuccess from "../Register/RegisterSuccess";
import Tabs from "../Screen/Tabs";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess}/>
      <Stack.Screen name="Home" component={Tabs}/>
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