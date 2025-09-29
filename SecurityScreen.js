// screens/SecurityScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export default function SecurityScreen({ navigation }) {
  const [pin, setPin] = useState("");

  const handleKeyPress = (num) => {
    Haptics.selectionAsync(); // haptic feedback on key press
    if (pin.length < 4) {
      setPin((prev) => prev + num);
    }
  };

  const handleBackspace = () => {
    Haptics.selectionAsync(); // haptic feedback on backspace
    setPin((prev) => prev.slice(0, -1));
  };

  // Automatically navigate after 4 digits
  useEffect(() => {
    if (pin.length === 4) {
      Alert.alert("Success", "Passcode accepted", [
        {
          text: "OK",
          onPress: () => {
            setPin(""); // reset pin
            navigation.replace("Main"); // go to MainScreen placeholder
          },
        },
      ]);
    }
  }, [pin]);

  const renderPinDots = () => {
    let dots = [];
    for (let i = 0; i < 4; i++) {
      dots.push(
        <View key={i} style={[styles.dot, i < pin.length ? styles.filledDot : {}]} />
      );
    }
    return <View style={styles.dotsContainer}>{dots}</View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PassCode</Text>
      <Text style={styles.subtitle}>
        Use the same PIN as your bank services, ATM, or credit machine
      </Text>

      {renderPinDots()}

      <View style={styles.keypadContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "fingerprint", 0, "backspace"].map((item, index) => {
          if (item === "fingerprint") {
            return (
              <TouchableOpacity
                key={index}
                style={styles.keyButton}
                onPress={() => navigation.navigate("FingerprintScreen")}
              >
                <Ionicons name="finger-print" size={32} color="#000" />
              </TouchableOpacity>
            );
          } else if (item === "backspace") {
            return (
              <TouchableOpacity key={index} style={styles.keyButton} onPress={handleBackspace}>
                <Ionicons name="backspace" size={28} color="#000" />
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                key={index}
                style={styles.keyButton}
                onPress={() => handleKeyPress(item.toString())}
              >
                <Text style={styles.keyText}>{item}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>

      <TouchableOpacity
        style={styles.fingerprintOption}
        onPress={() => navigation.navigate("FingerprintScreen")}
      >
        <Ionicons name="finger-print" size={20} color="#000" />
        <Text style={styles.fingerprintText}>Forgot Passcode? Use Fingerprint Instead</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 40,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 50,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  filledDot: {
    backgroundColor: "#000",
  },
  keypadContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  keyButton: {
    width: "30%",
    aspectRatio: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
  },
  keyText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
  },
  fingerprintOption: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  fingerprintText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
    textDecorationLine: "underline",
  },
});


