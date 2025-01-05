import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

const SubjectDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#00847C" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Maths</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>
          Here you’re gonna find tasks and notes for the subject
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbarWrapper}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00847C',
    textAlign: 'center',
    flex: 1,
  },
  mainContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
    marginTop: 200,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#004D43',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#00847C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  navbarWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default SubjectDetails;
