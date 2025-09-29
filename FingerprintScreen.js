// screens/FingerprintScreen.js
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Image, Alert } from "react-native";
import * as Haptics from "expo-haptics";

export default function FingerprintScreen({ navigation }) {
  const [scanning, setScanning] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;

  const startScan = () => {
    if (scanning) return;

    setScanning(true);
    progress.setValue(0);

    // Haptic feedback on press
    Haptics.selectionAsync();

    Animated.timing(progress, {
      toValue: 1,
      duration: 1500, // time to fill
      useNativeDriver: false,
    }).start(() => {
      setScanning(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert("Success", "Fingerprint verified!", [
        {
          text: "OK",
          onPress: () => navigation.replace("Main"),
        },
      ]);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Fingerprint Scan</Text>
        <Text style={styles.subtitle}>
          Gently press finger on the screen, back and forth till fingerprint icon is fully outlined in green
        </Text>

        <TouchableWithoutFeedback onPress={startScan}>
          <View style={styles.fingerprintBox}>
            <Image
              source={require("../assets/finger-1.png")}
              style={styles.fingerprintImage}
              resizeMode="contain"
            />
            <Animated.View
              style={[
                styles.progressOverlay,
                {
                  width: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // centers content vertically
    alignItems: "center",     // centers horizontally
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginHorizontal: 40,
    marginBottom: 30,
  },
  fingerprintBox: {
    width: 180,
    height: 180,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  fingerprintImage: {
    width: 120,
    height: 120,
  },
  progressOverlay: {
    position: "absolute",
    height: "100%",
    backgroundColor: "rgba(0,255,0,0.3)",
    left: 0,
    top: 0,
  },
});


