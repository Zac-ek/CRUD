import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentList from './screens/StudentList';
import StudentFormScreen from './screens/StudentFormScreen';
import EditStudentScreen from './screens/EditStudentScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={StudentList}/>
        <Stack.Screen name='Registro' component={StudentFormScreen}/>
        <Stack.Screen name='Editar' component={EditStudentScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App