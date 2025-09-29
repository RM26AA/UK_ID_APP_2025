// screens/SettingsScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    darkMode: false,
    autoUpdates: true,
    locationServices: true,
    analytics: false,
  });

  const [username, setUsername] = useState("Keir Starmer");
  const [email, setEmail] = useState("keir@example.com");

  const toggleSwitch = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Settings</Text>

        {/* General Settings */}
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <Ionicons name="moon-outline" size={26} color="#000" style={{ marginRight: 12 }} />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Dark Mode</Text>
              <Text style={styles.optionDescription}>Enable dark theme for the app</Text>
            </View>
          </View>
          <Switch
            value={settings.darkMode}
            onValueChange={() => toggleSwitch("darkMode")}
            trackColor={{ false: "#ccc", true: "#000" }}
            thumbColor="#fff"
          />
        </View>

        {/* Preferences with Fake Slider */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.sliderContainer}>
          <Ionicons name="text-outline" size={26} color="#000" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={styles.optionTitle}>Font Size</Text>
            <View style={styles.fakeSlider}>
              <View style={[styles.fakeSliderThumb, { left: "50%" }]} />
            </View>
            <Text style={styles.optionDescription}>Current size: 16</Text>
          </View>
        </View>

        {/* Personal Info */}
        <Text style={styles.sectionTitle}>Personal Info</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={26} color="#000" style={{ marginRight: 12 }} />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your name"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={26} color="#000" style={{ marginRight: 12 }} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 12,
    color: "#000",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  optionDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  fakeSlider: {
    height: 6,
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginTop: 6,
    marginBottom: 4,
  },
  fakeSliderThumb: {
    position: "absolute",
    top: -6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});



