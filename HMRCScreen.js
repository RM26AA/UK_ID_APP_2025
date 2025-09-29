// screens/HMRCScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HMRCScreen({ navigation }) {
  // QR code placeholder (replace with your QR code image)
  const qrImage = require("../assets/HMRC-1.png");

  // HMRC link (replace with real external link)
  const hmrcLink = "https://www.gov.uk/government/people/keir-starmer";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>HMRC</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Sir Keir Starmer</Text>
          <Text style={styles.infoText}>Date of Birth: September 2, 1962</Text>
          <Text style={styles.infoText}>Profession: Prime Minister, Leader of Labour Party</Text>
          <Text style={styles.infoText}>
            Property: Sold a seven-acre field in Surrey (1996–2022)
          </Text>
          <Text style={styles.infoText}>
            Taxes: Regularly filed tax returns; additional income from royalties and speaking engagements
          </Text>
        </View>

        {/* QR Code Section */}
        <View style={styles.qrSection}>
          <Text style={styles.subtitle}>Verification QR Code</Text>
          <Image source={qrImage} style={styles.qrImage} resizeMode="contain" />

          <TouchableOpacity style={styles.qrButton} onPress={() => Linking.openURL(hmrcLink)}>
            <Ionicons name="qr-code-outline" size={24} color="#fff" />
            <Text style={styles.qrButtonText}>Open HMRC Link</Text>
          </TouchableOpacity>
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
    padding: 20,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#000",
  },
  infoText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 4,
    lineHeight: 20,
  },
  qrSection: {
    alignItems: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#000",
  },
  qrImage: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  qrButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  qrButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
