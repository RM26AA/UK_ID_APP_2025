// screens/SplashScreen.js
import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, Pressable } from "react-native";
import { Audio } from "expo-av";

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const buttonFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Play intro sound
    let sound;
    const playSound = async () => {
      sound = new Audio.Sound();
      try {
        await sound.loadAsync(require("../assets/noti-1.mp3")); // or .wav
        await sound.playAsync();
      } catch (err) {
        console.log("Error playing sound:", err);
      }
    };
    playSound();

    // Run logo animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // After logo animation, fade in the button
      Animated.timing(buttonFade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo-3.png")}
        style={[
          styles.logo,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
        resizeMode="contain"
      />

      <Animated.View style={{ opacity: buttonFade, width: "100%", alignItems: "center" }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { transform: [{ scale: 0.97 }], opacity: 0.9 },
          ]}
          onPress={() => navigation.replace("Security")} // goes to SecurityScreen
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
});

