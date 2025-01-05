import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import Navbar from '../components/Navbar';

const NewTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionHeight, setDescriptionHeight] = useState(100);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dropdown picker states
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState(null);
  const [items, setItems] = useState([
    { label: 'Math', value: 'math' },
    { label: 'Science', value: 'science' },
    { label: 'History', value: 'history' },
  ]);

  // Handle date selection
  const onDateSelect = (day) => {
    setDeadline(day.dateString);
    setIsModalVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FDFEFF' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00847C" />
          </TouchableOpacity>
          <Text style={styles.headerText}>New Task</Text>
        </View>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Let's Get Things Done!</Text>
          <Text style={styles.subText}>Add a new task to boost your progress!</Text>
        </View>
        <View style={[styles.section, { zIndex: 2000 }]}>
          <Text style={styles.label}>Choose a Subject</Text>
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
            listMode="SCROLLVIEW"
            selectedItemContainerStyle={{
              backgroundColor: '#00847C',
            }}
            selectedItemLabelStyle={{
              color: '#FFFFFF',
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Task Title</Text>
          <TextInput
            style={styles.input}
            placeholder="E.g., Complete chapter 5"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Deadline</Text>
          <TouchableOpacity
            style={styles.deadlineButton}
            onPress={() => setIsModalVisible(true)}
          >
            <View style={styles.deadlineContent}>
              <MaterialCommunityIcons name="calendar" size={18} color="#6B7280" />
              <Text style={styles.deadlineText}>{deadline || 'Set Deadline'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textarea, { height: descriptionHeight }]}
            placeholder="E.g., Prepare notes for the exam"
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
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={onDateSelect}
              markedDates={{ [deadline]: { selected: true, selectedColor: '#00847C' } }}
              theme={{
                arrowColor: '#00847C',
                textMonthFontWeight: 'bold',
                todayTextColor: '#00847C',
                todayTextFontWeight: 'bold',
                textMonthFontSize: 18,
                textDayHeaderFontWeight: 'bold',
                textDayHeaderFontSize: 14,
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#00847C',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  deadlineButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  deadlineContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
  },
});

export default NewTask;