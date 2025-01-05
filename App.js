import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/screens/Home';
import SignIn from './app/screens/SignIn'; // Ensure this import is correct
import SignUp from './app/screens/SignUp'; // Ensure this import is correct
import Welcome from './app/screens/Welcome'; // Ensure this import is correct
import DateReset from './app/screens/DateReset';
import NewTask from './app/screens/NewTask';
import NewNote from './app/screens/NewNote';
import Subjects from './app/screens/Subjects';
import SubjectDetails from './app/screens/SubjectDetails';
import Profile from './app/screens/Profile';
import Noteinfo from './app/screens/Noteinfo';
import EditProfile from './app/screens/EditProfile';
import EditNote from './app/screens/EditNote';
import AllNotes from './app/screens/AllNotes';
import Calendar from './app/screens/Calendar';
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Date" component={DateReset} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} /> {/* Ensure this is defined */}
        <Stack.Screen name="SignUp" component={SignUp} /> {/* Ensure this is defined */}
        <Stack.Screen name="NewTask" component={NewTask} options={{ title: 'New Task' }} />
        <Stack.Screen name="NewNote" component={NewNote} options={{ title: 'Add Note' }} />
        <Stack.Screen name="Subjects" component={Subjects} options={{ title: 'Subjects' }} />
        <Stack.Screen name="SubjectDetails" component={SubjectDetails} options={{ title: 'Subject Details' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Noteinfo" component={Noteinfo} options={{ title: 'Note Info' }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
        <Stack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
        <Stack.Screen name="AllNotes" component={AllNotes} options={{ title: 'All Notes' }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ title: 'Calendar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}