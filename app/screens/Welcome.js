import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../assets/images/logo.png")} // Replace with your icon's path
          style={styles.icon}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome Name</Text>
      <Text style={styles.description}>
        "Almost there! Just a few more steps to go!"
      </Text>
      <View style={styles.pagination}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginTop:10,
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#008B84",
    marginBottom: 10,
    
  },
  description: {
    fontSize: 26,
    color: "#666666",
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  pagination: {
    flexDirection: "row",
    
    marginTop:"80%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#008B84",
  },
  startButton: {
    width: "80%",
    backgroundColor: "#008B84",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop:10,

    
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default WelcomeScreen;
