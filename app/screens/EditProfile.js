import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Navbar from '../components/Navbar';

const EditProfile = () => {
  const [name, setName] = useState('ZF');
  const [email, setEmail] = useState('email@example.com');
  const [dob, setDob] = useState('15/08/2000');
  const [resetDate, setResetDate] = useState('12/01/2025');
  const [gender, setGender] = useState('Female');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  const handleSave = () => {
    console.log('Changes saved!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00847C" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profilePic}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter name here"
            placeholderTextColor="#C4EAE3"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email here"
            placeholderTextColor="#C4EAE3"
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={dob}
            onChangeText={setDob}
            placeholder="DD/MM/YY"
            placeholderTextColor="#C4EAE3"
          />

          <Text style={styles.label}>Reset Date</Text>
          <TextInput
            style={styles.input}
            value={resetDate}
            onChangeText={setResetDate}
            placeholder="DD/MM/YY"
            placeholderTextColor="#C4EAE3"
          />
        </View>
        <View style={styles.genderContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.genderButtons}>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'Male' && styles.selectedGender]}
              onPress={() => setGender('Male')}
            >
              <Text style={styles.genderButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderButton, gender === 'Female' && styles.selectedGender]}
              onPress={() => setGender('Female')}
            >
              <Text style={styles.genderButtonText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
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
    marginBottom: 20,
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
  saveButton: {
    backgroundColor: '#00847C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EditProfile;
