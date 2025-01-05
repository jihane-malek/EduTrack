import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
  Platform,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('2024-01-03');
  const [isHovered, setIsHovered] = useState(false);
  const [events, setEvents] = useState({
    '2024-01-03': [
      { title: 'task1', description: 'Discuss new marketing strategies', color: '#4CA8A3' },
      { title: 'task2', description: 'Brainstorm ideas for new products', color: '#66B5B0' },
      { title: 'task3', description: 'Relax and refresh with colleagues', color: '#99CDCA' },
      { title: 'task4', description: 'Review new company policies', color: '#CCE6E4' },
    ],
  });

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const renderEvent = ({ item }) => (
    <View style={[styles.eventContainer, { backgroundColor: item.color }]}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#00847C" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Calendar</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Calendar */}
        <Pressable
          style={[
            styles.calendarContainer,
            isHovered && styles.hoveredContainer,
          ]}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Calendar
            current={selectedDate}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#00847C',
                selectedTextColor: '#fff',
              },
            }}
            onDayPress={handleDateSelect}
            monthFormat={'yyyy MMMM'}
            style={styles.calendar}
            theme={{
              arrowColor: '#00847C',
              todayTextColor: '#FF6347',
              monthTextColor: '#00847C',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayFontSize: 18,
              textMonthFontSize: 22,
            }}
          />
        </Pressable>

        {/* Schedule */}
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleTitle}>Today - {selectedDate}</Text>
          <FlatList
            data={events[selectedDate] || []}
            renderItem={renderEvent}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      <Navbar style={styles.navbar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 30 : 50,
    paddingBottom: 80, 
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
  calendarContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  hoveredContainer: {
    borderColor: '#00847C',
    backgroundColor: '#E6F7F5',
  },
  calendar: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
  scheduleContainer: {
    width: '100%',
    marginTop: 20,
  },
  scheduleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  eventContainer: {
    padding: 20, 
    marginBottom: 15,
    borderRadius: 12,
    width: '100%',
    backgroundColor: '#A8D5BA',
    alignSelf: 'center', 
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
