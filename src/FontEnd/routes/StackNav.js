import Register from "../Register/Register";
import Login from "../Login/Login";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterSuccess from "../Register/RegisterSuccess";
import HomeScreen from "../Home/HomeScreen";
import BoxChat from "../Home/BoxChat";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess}/>
      <Stack.Screen name="Home" component={HomeScreen}/>   
      <Stack.Screen name="Chat" component={BoxChat}/>
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