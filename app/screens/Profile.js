import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

const Profile = () => {
  const [gender, setGender] = useState('Female'); 
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00847C" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity style={styles.editIconContainer}>
            <Ionicons name="pencil" size={24} color="#00847C" />
          </TouchableOpacity>
        </View>
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profilePic}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value="ZF" editable={false} placeholder="Enter name here" placeholderTextColor="#C4EAE3" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} value="email@example.com" editable={false} placeholder="Enter Email here" placeholderTextColor="#C4EAE3" />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value="15/08/2000" editable={false} placeholder="DD/MM/YY" placeholderTextColor="#C4EAE3" />

          <Text style={styles.label}>Reset Date</Text>
          <TextInput style={styles.input} value="12/01/2025" editable={false} placeholder="DD/MM/YY" placeholderTextColor="#C4EAE3" />
        </View>

        {/* Gender Display (Non-Editable) */}
        <View style={styles.genderContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderButtons}>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'Male' && styles.selectedGender]}
              disabled={gender === 'Male'} 
            >
              <Text style={styles.genderButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'Female' && styles.selectedGender]}
              disabled={gender === 'Female'} 
            >
              <Text style={styles.genderButtonText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00847C',
    flex: 1,
    textAlign: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    right: 10,
    top: 0,
    padding: 10,
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
    marginTop: 50,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#C4EAE3',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 5,
  },
  genderContainer: {
    marginBottom: 30,
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    width: '48%',
    alignItems: 'center',
  },
  selectedGender: {
    backgroundColor: '#00847C',
    borderColor: '#00847C',
  },
  genderButtonText: {
    color: '#004D43',
    fontWeight: '600',
  },
});

export default Profile;
