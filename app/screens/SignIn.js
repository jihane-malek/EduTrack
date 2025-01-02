import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in</Text>
      <Text >E-mail</Text>
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <Text>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
       <Text onPress={() => alert('Forgot Password')} style={styles.link}>
        Forgot Password?
      </Text>
      {/* Sign in Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Sign in clicked!')}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

     
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        Create a new account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    margin : 40,
    
  },
  header: {
    fontSize: 58,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize:18,
  },
  link: {
    marginTop: 30,
    color: '#000000',
    textAlign: 'left',
    textDecorationLine: 'underline',
    fontSize:18,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#00796b',  // Green color for the button
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 250,
  },
  buttonText: {
    color: '#fff',  // White text
    fontWeight: 'bold',
    fontSize: 25,
  },
});
