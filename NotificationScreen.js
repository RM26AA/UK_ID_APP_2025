import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen() {
  const [settings, setSettings] = useState({
    showNotifications: true,
    appIconBadges: true,
    floatingNotifs: false,
    lockScreenNotifs: true,
    allowSound: true,
    allowVibration: true,
    allowLED: false,
  });

  const toggleSwitch = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const options = [
    {
      key: "showNotifications",
      icon: "notifications-outline",
      title: "Show Notifications",
      description: "Enable notifications for this app",
    },
    {
      key: "appIconBadges",
      icon: "apps-outline",
      title: "Show App Icon Badges",
      description: "Display badges on the app icon",
    },
    {
      key: "floatingNotifs",
      icon: "albums-outline",
      title: "Floating Notifications",
      description: "Show pop-up notifications while using other apps",
    },
    {
      key: "lockScreenNotifs",
      icon: "lock-closed-outline",
      title: "Lock Screen Notifications",
      description: "Display notifications on lock screen",
    },
    {
      key: "allowSound",
      icon: "volume-high-outline",
      title: "Allow Sound",
      description: "Play a sound when a notification arrives",
    },
    {
      key: "allowVibration",
      icon: "phone-portrait-outline",
      title: "Allow Vibration",
      description: "Vibrate on notification",
    },
    {
      key: "allowLED",
      icon: "flash-outline",
      title: "Allow Using LED Light",
      description: "Use LED light for notifications",
    },
  ];

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Notifications</Text>

        {options.map((opt) => (
          <View key={opt.key} style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <Ionicons name={opt.icon} size={28} color="#000" style={{ marginRight: 12 }} />
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{opt.title}</Text>
                <Text style={styles.optionDescription}>{opt.description}</Text>
              </View>
            </View>
            <Switch
              value={settings[opt.key]}
              onValueChange={() => toggleSwitch(opt.key)}
              trackColor={{ false: "#ccc", true: "#000" }}
              thumbColor="#fff"
            />
          </View>
        ))}
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
    paddingTop: 20, // extra padding for top
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
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
});

