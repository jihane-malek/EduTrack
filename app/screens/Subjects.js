import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState([
    { id: '1', text: 'Java', completed: false },
    { id: '2', text: 'JEE', completed: false },
    { id: '3', text: 'Subject3', completed: false },
  ]);

  const [subjectInput, setSubjectInput] = useState('');
  const navigation = useNavigation();

  const toggleSubjectCompletion = (id) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, completed: !subject.completed } : subject
      )
    );
  };

  const addSubject = () => {
    if (subjectInput.trim()) {
      const newSubject = {
        id: (subjects.length + 1).toString(),
        text: subjectInput.trim(),
        completed: false,
      };
      setSubjects((prevSubjects) => [...prevSubjects, newSubject]);
      setSubjectInput('');
    }
  };

  const deleteSubject = (id) => {
    setSubjects((prevSubjects) => prevSubjects.filter((subject) => subject.id !== id));
  };

  const renderRightActions = (id) => (
    <View style={styles.actionContainer}>
      <TouchableOpacity
        style={[styles.actionButton, styles.modifyButton]}
        onPress={() => alert(`Modify subject with ID: ${id}`)}
      >
        <Ionicons name="create-outline" size={24} color="#00847C" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteButton]}
        onPress={() => deleteSubject(id)}
      >
        <Ionicons name="trash-outline" size={24} color="#D32F2F" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="#00847C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subjects</Text>
      </View>
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <View style={styles.subjectContainer}>
              <Ionicons name="document-outline" size={30} color="#00847C" />
              <Text style={styles.subjectText}>{item.text}</Text>
            </View>
          </Swipeable>
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={addSubject}>
              <Ionicons name="add-circle-outline" size={32} color="#00847C" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Add a new subject"
              placeholderTextColor="#B0BEC5"
              value={subjectInput}
              onChangeText={setSubjectInput}
            />
          </View>
        }
      />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00847C',
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 20,
  },
  subjectText: {
    fontSize: 18,
    color: '#37474F',
    fontWeight: '600',
    marginLeft: 10,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  modifyButton: {
    backgroundColor: 'rgba(0, 132, 124, 0.1)',
  },
  deleteButton: {
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    borderWidth: 0, 
    borderColor: 'transparent', 
    outlineStyle: 'none', 
  },
});
