import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';

  


const householdno = () => {
  //States for inputs
  const [enterNumber, setEnterNumber] = useState("");
  const [household, setHousehold] = useState("Select Yees/No");

   //const [selectedValue, setSelectedValue] = useState<'yes' | 'no' | null>(null);
   const navigation = useNavigation();

   const handleSave = () => {

    Alert.alert(  
     "Saved",  
     "You have been successfully saved the data.",  
     [  
       { text: "OK", onPress: () => navigation.navigate("personalinfo") } // Navigate to login screen  
     ]  
   );     
   };
  


  
  return (
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/header_image.png')}
          style={styles.reactLogo}
          />
        <Text style={styles.headertext}>Household Total Number</Text>
        <View style={styles.border}>
          <Text style={styles.text}>
            A. How many people (including visistors), slept here in your household on the night of Sunday, 16th June 2024?
              
          </Text>
    
          <TextInput
                style={styles.input}
                placeholder='Enter Number'
                value={enterNumber}
                onChangeText={setEnterNumber}
                placeholderTextColor={"#888"}
              />
          
          <Text style={styles.text}>B. Are there any other person (not family member), such as domestic servants lodgers or friends who slept here on 16th June 2024 who may not have been listed? </Text>   
           <Picker
                selectedValue={household}
                onValueChange={(itemValue) => setHousehold(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label={"Select Yes/No"} />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
            </Picker>
          
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>  
                <Text style={styles.saveButtonText}>Save</Text>  
                </TouchableOpacity>
       
          

      </View>
  )
}

export default householdno

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
    justifyContent: "center",
  },
  reactLogo:{
    height: 130,
    width: 350,
    bottom: 0,
    left: 6,
    top: -50,
    position: 'relative',
  },
  headertext:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#d97706", // Darker text color for contrast
    textAlign: "center",
    marginBottom: 30,
    top: -50,
    padding: 5
  },
  border: {  
    borderWidth: 1,  
    borderColor: '#cccccc', // Customize your border color  
    padding: 15, // Add some padding around the text  
    borderRadius: 5, // Optional: add rounded corners 
    top: -80,
  },  
  border1: {  
    top: -60,
    borderWidth: 1,  
    borderColor: '#cccccc', // Customize your border color  
    padding: 20, // Add some padding around the text  
    borderRadius: 5 // Optional: add rounded corners  
  },  
  text: {  
    fontSize: 16,  
    color: '#ffffff', // Customize your text color
    bottom: 10,  
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
  checkboxContainer: {  
    flexDirection: 'row',  
      alignItems: 'center',  
  },  
  label: {  
      marginLeft: 8,  
      fontSize: 16,  
  },
  picker: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 20,
  
  },
  saveButton: {  
    backgroundColor: "#4caf50", // A contrasting color for the logout button  
    borderRadius: 12,  
    paddingVertical: 15,  
    paddingHorizontal: 20,  
    marginBottom: -50, 
    marginTop: 20,
    elevation: 3, // Elevation on Android
    alignItems: 'center',  
  },  
  saveButtonText: {  
    color: "#fff",  
    fontSize: 18,  
    fontWeight: "bold",
    textAlign: "center", 
  },  
  
  
})