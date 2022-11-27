import Register from "../Register/Register";
import Welcome from "../Welcome/Welcome";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Đăng nhập" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
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