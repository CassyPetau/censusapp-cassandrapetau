import { Image, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("infopage");
  };

  const handleSignIn = () => {
    (navigation as any).navigate("auth");
  };

  const [enteremail, setEnteEmail] = useState("");
  const [enterpassword, setPassword] = useState("");



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '', dark: '' }}
      headerImage={
        <Image
          source={require('@/assets/images/header_image.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Census Connect</ThemedText>
          <HelloWave/>
      </ThemedView>

      <TextInput style={styles.input}
        placeholder='Enter Email'
        value={enteremail}
        onChangeText={setEnteEmail}
        placeholderTextColor={"#888"}
      />
      <TextInput style={styles.input}
        placeholder='Enter Password'
        value={enterpassword}
        onChangeText={setPassword}
        
        placeholderTextColor={"#888"}
      />

      <ThemedView style={styles.stepContainer}>
      <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
        <ThemedText style={styles.buttonText}>Log In</ThemedText>
      </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
      {/* <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleSignIn()}>
        <ThemedText style={styles.buttonText}>Login</ThemedText>
      </TouchableOpacity> */}
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection:'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 50,
    color: '#0c4a6e',
    textAlign: 'justify'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 130,
    width: 390,
    bottom: 0,
    left: 6,
    top: 50,
    position: 'relative',
  },
  button: {
    backgroundColor: "#2196F3", // Modern blue color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#2196F3", // Stylish blue for Sign In/Sign Up buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
},
input: {
  height: 50,
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 6, // Rounded corners for a modern feel
  paddingHorizontal: 15,
  marginBottom: 20,
  backgroundColor: "#fff", // White background for input fields
  shadowColor: "#000", // Shadow for subtle elevation
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3, // Elevation on Android
  marginTop: 10,
},
});
