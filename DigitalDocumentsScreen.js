// screens/DigitalDocumentsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DigitalDocumentsScreen({ navigation }) {
  // Replace with your real links
  const idDocumentLink = "https://en.wikipedia.org/wiki/Keir_Starmer";
  const payslipLink = "https://www.britannica.com/biography/Keir-Starmer";

  // QR code placeholder (replace with your provided image)
  const qrImage = require("../assets/qr-2.png");

  // Mock external link (replace with your real QR code link)
  const qrLink = "https://www.gov.uk";

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Digital Documents</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoBox}>
          <Ionicons name="document-text-outline" size={40} color="#000" style={{ marginBottom: 10 }} />
          <Text style={styles.infoText}>
            Secure access to official government documents for{" "}
            <Text style={{ fontWeight: "700" }}>Keir Starmer</Text>.
          </Text>
        </View>

        {/* Link Buttons */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.pdfButton} onPress={() => openLink(idDocumentLink)}>
            <Ionicons name="person-circle-outline" size={28} color="#000" />
            <Text style={styles.pdfText}>View ID Document</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pdfButton} onPress={() => openLink(payslipLink)}>
            <Ionicons name="cash-outline" size={28} color="#000" />
            <Text style={styles.pdfText}>View Payslip Record</Text>
          </TouchableOpacity>
        </View>

        {/* QR Code Section */}
        <View style={styles.qrSection}>
          <Text style={styles.subtitle}>Verification QR Code</Text>
          <Image source={qrImage} style={styles.qrImage} resizeMode="contain" />

          <TouchableOpacity style={styles.qrButton} onPress={() => openLink(qrLink)}>
            <Ionicons name="qr-code-outline" size={24} color="#fff" />
            <Text style={styles.qrButtonText}>Open QR Link</Text>
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
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    lineHeight: 22,
  },
  card: {
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
  pdfButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  pdfText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
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


