import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

export default function NoteDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#00847C" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Note Details</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.label}>Subject</Text>
          <View style={styles.valueBox}>
            <Text style={styles.valueText}>Math</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Note Title</Text>
          <View style={styles.valueBox}>
            <Text style={styles.valueText}>Algebra Practice</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <View style={styles.valueBox}>
            <Text style={[styles.valueText, styles.descriptionText]}>
              Complete exercises 5-10 from the Algebra book. Make sure to revise
              the quadratic equations section.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Note</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
    paddingTop: Platform.OS === 'android' ? 30 : 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    marginTop: 50,

   
  },
  headerButton: {
    position: 'absolute',
    left: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00847C',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  valueBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  valueText: {
    fontSize: 16,
    color: '#37474F',
  },
  descriptionText: {
    textAlignVertical: 'top',
    lineHeight: 22,
  },
  editButton: {
    backgroundColor: '#00847C',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    marginTop: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});