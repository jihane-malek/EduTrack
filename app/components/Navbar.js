import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();

  const [translateAnim] = useState(new Animated.Value(0)); // To animate the circular cursor
  const [selectedTab, setSelectedTab] = useState('Home'); // Track the selected tab
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Toggle Add options

  const tabs = [
    { name: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { name: 'Subjects', icon: 'book-outline', activeIcon: 'book' },
    { name: 'Add', icon: 'add-outline', activeIcon: 'add' },
    { name: 'Calendar', icon: 'calendar-outline', activeIcon: 'calendar' },
    { name: 'Profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  const handlePress = (index, screen) => {
    if (screen === 'Add') {
      setIsDropdownVisible(!isDropdownVisible);
    } else {
      setIsDropdownVisible(false);
    }

    setSelectedTab(screen);

    Animated.spring(translateAnim, {
      toValue: index,
      useNativeDriver: true,
    }).start();

    if (screen !== 'Add') {
      navigation.navigate(screen); // Redirige vers l'écran correspondant
    }
  };

  const handleOptionPress = (option) => {
    setSelectedTab(option);
    setIsDropdownVisible(false);
    navigation.navigate(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <Animated.View
          style={[
            styles.circularCursor,
            {
              transform: [
                {
                  translateX: translateAnim.interpolate({
                    inputRange: tabs.map((_, index) => index),
                    outputRange: tabs.map((_, index) => 1 + index * 63),
                  }),
                },
              ],
            },
          ]}
        />

        {tabs.map((tab, index) => {
          const isFocused = selectedTab === tab.name;

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => handlePress(index, tab.name)}
              style={styles.tabButton}
            >
              <Ionicons
                name={isFocused ? tab.activeIcon : tab.icon}
                size={24}
                color={isFocused ? '#FFFFFF' : '#999999'}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {isDropdownVisible && (
        <View style={styles.addOptionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, selectedTab === 'Task' && styles.selectedOption]}
            onPress={() => handleOptionPress('NewTask')}
          >
            <Ionicons name="document-text-outline" size={20} color="#FFFFFF" />
            <Text style={styles.optionText}>Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, selectedTab === 'Note' && styles.selectedOption]}
            onPress={() => handleOptionPress('NewNote')}
          >
            <Ionicons name="create-outline" size={20} color="#FFFFFF" />
            <Text style={styles.optionText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    height: 70,
    borderRadius: 35,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  circularCursor: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00847C',
    bottom: 5,
    zIndex: -1,
  },
  addOptionsContainer: {
    position: 'absolute',
    bottom: 100,
    left: '50%',
    transform: [{ translateX: -120 }],
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    width: '75%',
    shadowOffset: { width: 10, height: 5 },
    zIndex: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#00847C',
    elevation: 3,
  },
  selectedOption: {
    backgroundColor: '#00695C',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});
