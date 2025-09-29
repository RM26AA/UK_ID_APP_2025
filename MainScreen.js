// screens/MainScreen.js
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

export default function MainScreen({ navigation }) {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    // Load and play sound on mount
    const playSound = async () => {
      try {
        await sound.current.loadAsync(require("../assets/noti-3.mp3"));
        await sound.current.playAsync();
      } catch (error) {
        console.log("Error loading sound", error);
      }
    };

    playSound();

    // Unload sound on unmount
    return () => {
      sound.current.unloadAsync();
    };
  }, []);

  // Animations for cards
  const fadeAnim1 = new Animated.Value(0);
  const fadeAnim2 = new Animated.Value(0);
  const fadeAnim3 = new Animated.Value(0);
  const fadeAnimShortcuts = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim1, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeAnim2, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeAnim3, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeAnimShortcuts, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../assets/logo-5.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome, Keir Starmer</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("NotificationScreen")}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("SettingsScreen")}>
              <Ionicons name="settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Card */}
        <Animated.View style={[styles.card, { opacity: fadeAnim1 }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>UNITED KINGDOM</Text>
            <Image
              source={require("../assets/flag-1.PNG")}
              style={styles.flagImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/profile-1.jpg")}
              style={styles.profilePic}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.detailText}>Name: Keir Starmer</Text>
              <Text style={styles.detailText}>Age: 59</Text>
              <Text style={styles.detailText}>DOB: 2 Sept 1962</Text>
              <Text style={styles.detailText}>Nationality: British</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("DigitalDocumentScreen")}>
            <Text style={styles.buttonText}>View Digital Documents</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Extra Details Card */}
        <Animated.View style={[styles.card, { opacity: fadeAnim2 }]}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <Text style={styles.detailText}>Address: 10 Downing Street, London</Text>
          <Text style={styles.detailText}>Employment Status: Member of Parliament</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("HMRCScreen")}>
            <Text style={styles.buttonText}>View HMRC Records</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Voter Registration Card */}
        <Animated.View style={[styles.card, { opacity: fadeAnim3 }]}>
          <Text style={styles.cardTitle}>Voter Registration Status</Text>
          <Text style={styles.detailText}>
            You’ve recently told us you moved house.
            {"\n"}Would you like to register to vote at your new address?
          </Text>
          <TouchableOpacity style={styles.primaryButton} onPress={() => Linking.openURL('https://www.gov.uk/register-to-vote')}>
            <Text style={styles.buttonText}>Register to Vote</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Shortcuts */}
<Animated.View style={[styles.shortcutContainer, { opacity: fadeAnimShortcuts }]}>
  {[
    { name: "My Vehicle", screen: "MyVehicleScreen" },
    { name: "Appointments", screen: "Appointments" },
    { name: "Report Issues", screen: "Report" },
    { name: "Households", screen: "House" },
    { name: "My Council", link: "https://www.gov.uk/find-local-council" },
    { name: "Services", link: "https://www.gov.uk/" },
    { name: "Support", link: "https://www.gov.uk/check-benefits-financial-support" },
    { name: "Download ID Card", screen: "DigitalDocuments" },
    { name: "Share Verification", screen: "ShareVerification" },
    { name: "Print Copy", screen: "PrintCopy" },
  ].map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.shortcutButton}
      onPress={() => {
        // If the shortcut has a screen, navigate there
        if (item.screen) {
          navigation.navigate(item.screen);
        
	} else if (item.link) {
          Linking.openURL(item.link); // open external URL
        }
        // If you want some shortcuts to open external links, handle here
        // e.g., if(item.name === "Register to Vote") Linking.openURL("https://www.gov.uk/register-to-vote")
      }}
    >
      <Ionicons name="document-text-outline" size={20} color="#000" />
      <Text style={styles.shortcutText}>{item.name}</Text>
    </TouchableOpacity>
  ))}
</Animated.View>


        {/* Recent Activity */}
        <View style={styles.activityContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Text style={styles.activityText}>Downloaded Digital ID — Today 2:30 PM</Text>
          <Text style={styles.activityText}>Signed into DVLA Portal — Yesterday 4:15 PM</Text>
          <Text style={styles.activityText}>Security Update Applied — 3 days ago</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles remain same as previous MainScreen


const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff" },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 40,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  headerIcons: {
    position: "absolute",
    right: 16,
    top: 10,
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 12,
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  flagImage: {
    width: 32,
    height: 24,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  profileDetails: {
    flex: 1,
  },
  detailText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 4,
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  shortcutContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shortcutButton: {
    width: "48%",
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  shortcutText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "600",
  },
  activityContainer: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    color: "#000",
  },
  activityText: {
    fontSize: 12,
    color: "#333",
    marginBottom: 4,
  },
});


