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

const EditNote = ({ navigation }) => {
  const [subject, setSubject] = useState('math');
  const [noteTitle, setNoteTitle] = useState('Practice Quadratic Equations');
  const [description, setDescription] = useState(
    'Solve problems 5 to 15 from chapter 3 in the math workbook. Focus on solving quadratic equations using factorization.'
  );
  const [descriptionHeight, setDescriptionHeight] = useState(100);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color="#00847C" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Note</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            placeholder="Enter note title"
            value={noteTitle}
            onChangeText={setNoteTitle}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textarea, { height: descriptionHeight }]}
            placeholder="Enter note description"
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

      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDFEFF',
      paddingTop: Platform.OS === 'android' ? 30 : 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20, // Add padding to align content
      marginBottom: 20,
    },
    headerButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      flex: 1, // Allow the text to take up available space
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00847C',
      textAlign: 'center', // Center text within its flex space
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
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 15,
      elevation: 2,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      fontSize: 16,
      color: '#37474F',
      textAlignVertical: 'top',
      outlineStyle: 'none',
      outlineWidth: 0,
    },
    textarea: {
      textAlignVertical: 'top',
    },
    saveButton: {
      backgroundColor: '#00847C',
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      elevation: 3,
      marginTop: 20,
      width: '50%',
      alignSelf: 'center',
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });  
export default EditNote;