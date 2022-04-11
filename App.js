import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import StartScreen2 from './screens/StartScreen2';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='StartScreen2' component={StartScreen2}/> */}
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

