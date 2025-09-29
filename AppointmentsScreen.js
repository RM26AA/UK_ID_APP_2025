// screens/AppointmentsScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppointmentsScreen({ navigation }) {
  // Mock appointments
  const appointments = [
    {
      id: 1,
      title: "Cabinet Meeting",
      date: "2025-10-02",
      time: "10:30 AM",
      description: "Discuss upcoming policies and legislation.",
    },
    {
      id: 2,
      title: "Press Conference",
      date: "2025-10-03",
      time: "2:00 PM",
      description: "Media briefing on government updates.",
    },
    {
      id: 3,
      title: "Constituency Meeting",
      date: "2025-10-05",
      time: "11:00 AM",
      description: "Meet constituents to discuss local issues.",
    },
  ];

  const bookMeetingLink = "https://apply-for-public-appointment.service.gov.uk/contact";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Appointments</Text>
        </View>

        {/* Appointments List */}
        {appointments.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="calendar-outline" size={28} color="#000" />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardText}>Date: {item.date}</Text>
            <Text style={styles.cardText}>Time: {item.time}</Text>
            <Text style={styles.cardText}>Description: {item.description}</Text>
          </View>
        ))}

        {/* Book Meeting Button */}
        <TouchableOpacity style={styles.bookButton} onPress={() => Linking.openURL(bookMeetingLink)}>
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.bookButtonText}>Book a Meeting</Text>
        </TouchableOpacity>
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
  card: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
    color: "#000",
  },
  cardText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 4,
  },
  bookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
