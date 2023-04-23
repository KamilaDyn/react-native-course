import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            drawerActiveBackgroundColor: "#f0e1ff",
            drawerActiveTintColor: "#3c0a6b",
            // drawerStyle: { backgroundColor: "#ccc" },
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator> */}
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
