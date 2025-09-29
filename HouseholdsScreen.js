// screens/HouseholdsScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HouseholdsScreen({ navigation }) {
  // Mock properties data
  const properties = [
    {
      id: 1,
      name: "London Townhouse",
      price: "£1,200,000",
      size: "3,500 sq ft",
      landType: "Urban",
      lifespan: "50 years",
    },
    {
      id: 2,
      name: "Surrey Countryside Villa",
      price: "£2,500,000",
      size: "7,000 sq ft",
      landType: "Rural",
      lifespan: "80 years",
    },
    {
      id: 3,
      name: "Manchester Apartment",
      price: "£450,000",
      size: "1,200 sq ft",
      landType: "Urban",
      lifespan: "40 years",
    },
  ];

  const viewMoreLink = "https://www.gov.uk/find-government-property";

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Households</Text>
        </View>

        {/* Properties List */}
        <View style={styles.listContainer}>
          {properties.map((property, index) => (
            <View key={property.id} style={styles.propertyRow}>
              <Text style={styles.propertyName}>{property.name}</Text>
              <Text style={styles.propertyText}>Price: {property.price}</Text>
              <Text style={styles.propertyText}>Size: {property.size}</Text>
              <Text style={styles.propertyText}>Land Type: {property.landType}</Text>
              <Text style={styles.propertyText}>Lifespan: {property.lifespan}</Text>
              {index < properties.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        {/* View More Properties Button */}
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => Linking.openURL(viewMoreLink)}
        >
          <Ionicons name="home-outline" size={20} color="#fff" />
          <Text style={styles.moreButtonText}>View More Properties</Text>
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
  listContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  propertyRow: {
    marginBottom: 12,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    color: "#000",
  },
  propertyText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 2,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 8,
    marginBottom: 8,
  },
  moreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  moreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
