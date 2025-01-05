import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons"; // For calendar icon

const DateReset = () => {
  const [date, setDate] = useState(null); // State to store selected date
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control DateTimePicker visibility

  const onChangeMobileDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Close the picker
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Enter reset date</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        The reset date allows you to restart your tracking from the date you set.
      </Text>

      {/* Date Picker Container */}
      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)} // Open DateTimePicker
        >
          <Text style={styles.dateText}>
            {date ? date.toLocaleDateString() : "Set time"}
          </Text>
          <MaterialIcons name="calendar-today" size={24} color="#00796B" />
        </TouchableOpacity>
      </View>

      {/* Mobile DateTimePicker */}
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()} // Default to current date if none selected
          mode="date"
          display="default"
          onChange={onChangeMobileDate} // Handle date selection
        />
      )}

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          alert(`Selected Date: ${date ? date.toLocaleDateString() : "None"}`)
        }
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#00796B",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 26,
    color: "#707070",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    padding: 12,
    width: "80%",
    marginBottom: 24,
    marginTop:90,
  },
  datePickerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    
  },
  dateText: {
    fontSize: 16,
    color: "#707070",
  },
  nextButton: {
    width: "80%",
    backgroundColor: "#00796B",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop:150,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    
  },
});

export default DateReset;
