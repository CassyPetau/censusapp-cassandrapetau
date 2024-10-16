import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const commentpage = () => {
 const [text, setText] = useState('');

  const handleSubmit = () => {  
    if (text) {  
      Alert.alert("Comment Submitted", `Your comment: ${text}`, [{ text: "OK", onPress: () => setText('') }]);  
    } else {  
      Alert.alert("Empty Comment", "Please write a comment before submitting.");  
    }  
  };  


  return (
      <View style={styles.container}>
        <Image
          source={require('@/assets/images/header_image.png')}
          style={styles.reactLogo}
        />
        
        <View style={styles.textHeader}>
          <Text style={styles.header}>Comment/Remarks</Text>
          <Text style={styles.text}> (Note in the space below write down any comments or questions asked by the participants if they have.)</Text>
        
            <TextInput 
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder='Type here...'
            multiline={true} //Allows for miliple lines
            numberOfLines={6} //Number of lines to display initially
            textAlignVertical='top' //Allign text to the top
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>  
            <Text style={styles.submitButtonText}>Submit</Text>  
            </TouchableOpacity>
        </View>


      </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
    justifyContent: "center",
    
  },
  label:{
      fontSize: 18,
      marginBottom: 8,
  },
  reactLogo:{
    height: 130,
    width: 350,
    bottom: 0,
    left: 6,
    top: -180,
    position: 'relative',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d97706", // Darker text color for contrast
    textAlign: "center",
    marginBottom: 30,
    top: -170,
    padding: 5
  },
  textHeader: {
  },
  text: {
    color: 'white',
    top: -200,
    fontSize: 15,
  },
  input:{
    height: 100, // Set height for the input  
    width: '100%', // Full width  
    borderColor: '#black', // Border color  
    borderWidth: 2, // Border width  
    borderRadius: 5, // Rounded corners  
    padding: 10, // Inner padding  
    backgroundColor: '#ffffff', // Background color 
    top: -185,
  },
  submitButton: {  
    backgroundColor: "#4caf50", // Green background for submit button  
    borderRadius: 8,  
    paddingVertical: 12,  
    paddingHorizontal: -20,
    alignItems: 'center',
    bottom: -160,  
  },  
  submitButtonText: {  
    color: "#fff",  
    fontSize: 18,  
    fontWeight: "600",  
  },  
})


export default commentpage