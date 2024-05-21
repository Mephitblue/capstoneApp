import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          hidename="true"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
