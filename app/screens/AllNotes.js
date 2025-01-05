import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

const notes = [
  { id: '1', title: 'Réviser', description: 'Bien réviser le cours.' },
  { id: '2', title: 'Projet JEE', description: 'Finir le projet' },
  { id: '3', title: 'Projet java', description: 'Deadline du projet le 21' },
];

export default function NotesDashboard() {
  const navigation = useNavigation();

  const handleNotePress = (note) => {
    navigation.navigate('NoteDetails', { note });
  };

  const handleEditPress = (note) => {
    navigation.navigate('EditNote', { note });
  };

  const deleteSubject = (id) => {
    console.log(`Deleted note with ID: ${id}`);
  };

  const renderRightActions = (note) => (
    <View style={styles.actionContainer}>
      <TouchableOpacity
        style={[styles.actionButton, styles.modifyButton]}
        onPress={() => handleEditPress(note)}
      >
        <Ionicons name="create-outline" size={24} color="#00847C" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteButton]}
        onPress={() => deleteSubject(note.id)}
      >
        <Ionicons name="trash-outline" size={24} color="#D32F2F" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#00847C" />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Notes</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNote')}
          style={styles.simpleAddButton}
        >
          <Ionicons name="add-outline" size={24} color="#00847C" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="#B0BEC5" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search notes"
          placeholderTextColor="#B0BEC5"
        />
      </View>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => renderRightActions(item)}
            overshootRight={false} // Prevent overshooting
          >
            <TouchableOpacity onPress={() => handleNotePress(item)} style={styles.noteItem}>
              <View style={styles.noteContent}>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.noteDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Fixed Navbar */}
      <Navbar style={styles.navbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
    paddingTop: Platform.OS === 'android' ? 30 : 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00847C',
  },
  simpleAddButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#37474F',
    borderWidth: 0,
    outlineStyle: 'none',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  modifyButton: {
    backgroundColor: 'rgba(0, 132, 124, 0.1)',
  },
  deleteButton: {
    backgroundColor: 'rgba(211, 47, 47, 0.1)',
  },
  listContent: {
    paddingBottom: 90, // Adjust for Navbar
  },
  noteItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  noteContent: {
    marginBottom: 5,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00847C',
    marginBottom: 5,
  },
  noteDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Ensure it appears above everything else
  },
});
