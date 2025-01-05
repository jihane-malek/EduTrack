import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';


const NewNote = () => {
  const [subject, setSubject] = useState(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionHeight, setDescriptionHeight] = useState(100); 
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#FDFEFF' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00847C" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Note</Text>
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Let's Get Things Done!</Text>
          <Text style={styles.subText}>Add a new note to organize your ideas!</Text>
        </View>
        <View style={[styles.section, { zIndex: 2000 }]}>
          <Text style={styles.label}>Subject</Text>
          <DropDownPicker
            open={open}
            value={subject}
            items={items}
            setOpen={setOpen}
            setValue={setSubject}
            setItems={setItems}
            placeholder="Select Subject"
            style={styles.input}
            dropDownContainerStyle={{
              backgroundColor: '#FFFFFF',
              borderColor: '#E5E7EB',
              borderRadius: 15,
              elevation: 5,
            }}
            textStyle={{
              fontSize: 16,
              color: '#374151',
            }}
            containerStyle={{
              zIndex: 2000,
            }}
            selectedItemContainerStyle={{
              backgroundColor: '#00847C',
            }}
            selectedItemLabelStyle={{
              color: '#FFFFFF',
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Note Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={noteTitle}
            onChangeText={setNoteTitle}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[
              styles.input,
              styles.textarea,
              { height: descriptionHeight },
            ]}
            placeholder="Your notes go here ..."
            value={description}
            onChangeText={setDescription}
            multiline
            onContentSizeChange={(e) =>
              setDescriptionHeight(Math.max(100, e.nativeEvent.contentSize.height))
            }
          />
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 30 : 50,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00847C',
    textAlign: 'center',
    flex: 1,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00847C',
    marginBottom: 5,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 10,
    width: '90%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 15,
    padding: 14,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    elevation: 2,
    color: '#374151',
    outlineStyle: 'none',
  },
  textarea: {
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#00847C',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    width: '40%',
    elevation: 4,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewNote;