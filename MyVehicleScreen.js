// screens/MyVehicleScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyVehicleScreen({ navigation }) {
  // Mock vehicle data
  const vehicles = [
    {
      id: 1,
      make: "Tesla",
      model: "Model S",
      year: 2020,
      mot: "Valid until 2025-04-15",
      insurance: "Active",
      licence: "AB123XYZ",
    },
    {
      id: 2,
      make: "BMW",
      model: "X5",
      year: 2018,
      mot: "Valid until 2024-08-22",
      insurance: "Active",
      licence: "CD456UVW",
    },
    {
      id: 3,
      make: "Audi",
      model: "A6",
      year: 2016,
      mot: "Expired 2023-12-01",
      insurance: "Active",
      licence: "EF789RST",
    },
  ];

  // GOV.UK MOT link
  const motLink = "https://www.gov.uk/check-mot-history";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>My Vehicle</Text>
        </View>

        {/* Vehicle Cards */}
        {vehicles.map((vehicle) => (
          <View key={vehicle.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Ionicons name="car-outline" size={28} color="#000" />
              <Text style={styles.cardTitle}>{vehicle.make} {vehicle.model}</Text>
            </View>
            <Text style={styles.cardText}>Year: {vehicle.year}</Text>
            <Text style={styles.cardText}>MOT: {vehicle.mot}</Text>
            <Text style={styles.cardText}>Insurance: {vehicle.insurance}</Text>
            <Text style={styles.cardText}>Licence: {vehicle.licence}</Text>
          </View>
        ))}

        {/* View Vehicle Licence Button */}
        <TouchableOpacity style={styles.motButton} onPress={() => Linking.openURL(motLink)}>
          <Ionicons name="document-text-outline" size={20} color="#fff" />
          <Text style={styles.motButtonText}>View Vehicle Licence</Text>
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
    marginBottom: 2,
  },
  motButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  motButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
