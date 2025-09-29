// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens
import SplashScreen from "./screens/SplashScreen";
import SecurityScreen from "./screens/SecurityScreen";
import MainScreen from "./screens/MainScreen";
import FingerprintScreen from "./screens/FingerprintScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DigitalDocumentScreen from "./screens/DigitalDocumentsScreen";
import HMRCScreen from "./screens/HMRCScreen";
import MyVehicleScreen from "./screens/MyVehicleScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";
import ReportIssuesScreen from "./screens/ReportIssuesScreen";
import HouseholdsScreen from "./screens/HouseholdsScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FingerprintScreen" component={FingerprintScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="DigitalDocumentScreen" component={DigitalDocumentScreen} />
        <Stack.Screen name="HMRCScreen" component={HMRCScreen} />
        <Stack.Screen name="MyVehicleScreen" component={MyVehicleScreen} />
        <Stack.Screen name="Appointments" component={AppointmentsScreen} />
        <Stack.Screen name="Report" component={ReportIssuesScreen} />
        <Stack.Screen name="House" component={HouseholdsScreen} />

        {/* Add other screens here when ready */}
        {/* <Stack.Screen name="Security" component={SecurityScreen} /> */}
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

