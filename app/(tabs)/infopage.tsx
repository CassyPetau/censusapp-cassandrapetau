import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from 'expo-router';

const infopage = () => {
  const [province, setProvince] = useState("Select Province"); // Default dropdown value
  const [district, setDistrict] = useState(""); // Placeholder for entering district
  const [locallevelgovernment, setLocalLevelGovernment] = useState(""); //Placeholder for entering LLG
  const [censusunit, setCensusUnit] = useState(""); //Placeholder for entering  Census Unit
  const [censusunittype, setCensusUnitType] = useState (""); //Placeholder for entering census unit type
  const [workloadno, setWorkloadNo] = useState(""); //Placeholder for entering workload no
  const [section, setSection] = useState("");
  const [lot, setLot] = useState("");
  const [structure, setStructure] = useState("");
  const [pd, setPD] = useState("");
  const [householdno, setHouseholdNo] = useState("");
  
  const navigation = useNavigation();

    const handleSave = () => {

     Alert.alert(  
      "Saved",  
      "You have been successfully save the information.",  
      [  
        { text: "OK", onPress: () => navigation.navigate("householdno") } // Navigate to login screen  
      ]  
    );     
    };



  return (
    <ScrollView>
        <View style={styles.container}>
            <Image
              source={require('@/assets/images/header_image.png')}
              style={styles.reactLogo}
            />
          <Text style={styles.header}>Indicative Information</Text>
        </View>
        <View style={styles.container1}>
          <Picker  selectedValue={province}
                onValueChange={(itemValue) => setProvince(itemValue)}
                style={styles.picker}>

            <Picker.Item label={"Select Province"} />
                <Picker.Item label="Central Province" value="central province" />
                <Picker.Item label="National Capital District" value="national capital district" />
                <Picker.Item label="Miline Bay Province" value="miline bay province" />
                <Picker.Item label="Gulf Province" value="gulf province" />
                <Picker.Item label="Oro Province" value="oro province" />
                <Picker.Item label="Morobe Province" value="morobe province" />
                <Picker.Item label="East Sepik Province" value="east sepik province" />
                <Picker.Item label="West Sepik Province" value="west sepik province" />
                <Picker.Item label="Madang Province" value="madang province" />
                <Picker.Item label="East New Britian Province" value="east new britian province" />
                <Picker.Item label="West New Britian Province" value="west new britian province" />
                <Picker.Item label="Manus Province" value="manus province" />
                <Picker.Item label="New Ireland Province" value="new ireland province" />
                <Picker.Item label="Autonomous Region Of Bouganville " value="autonomous region of bouganville " />
                <Picker.Item label="Western Province" value="western province" />
                <Picker.Item label="Eastern Highlands Province" value="eastern highlands province" />
                <Picker.Item label="Western Highlands Province" value="Western Highlands province" />
                <Picker.Item label="Southern Province" value="southern province" />
                <Picker.Item label="Enga Province" value="enga province" />
                <Picker.Item label="Hela Province" value="hela province" />
                <Picker.Item label="Simbu Province" value=" simbu province" />
                <Picker.Item label="Jiwaka Province" value="jiwaka province" />
               
          </Picker>
            {/* Text Input 1 */}
            <TextInput
                style={styles.input}
                placeholder="Enter District"
                value={district}
                onChangeText={setDistrict}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Local Level Government (LLG)"
                value={locallevelgovernment}
                onChangeText={setLocalLevelGovernment}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Center Unit (CU)"
                value={censusunit}
                onChangeText={setCensusUnit}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Census Unit Type"
                value={censusunittype}
                onChangeText={setCensusUnitType}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
             <TextInput
                style={styles.input}
                placeholder="Enter Workload No"
                value={workloadno}
                onChangeText={setWorkloadNo}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
        </View>
        <View style={styles.container2}>
          <TextInput
            style={styles.input1}
            placeholder=' Enter Section'
            value={section}
            onChangeText={setSection}
            placeholderTextColor={"#888"}
          />
          <TextInput
            style={styles.input1}
            placeholder='Enter Lot'
            value={lot}
            onChangeText={setLot}
            placeholderTextColor={"#888"}
          />
          <TextInput
            style={styles.input1}
            placeholder='Enter Structure/Record No.'
            value={structure}
            onChangeText={setStructure}
            placeholderTextColor={"#888"}
          />
          <TextInput
            style={styles.input1}
            placeholder='Enter PD No.'
            value={pd}
            onChangeText={setPD}
            placeholderTextColor={"#888"}
          />
          <TextInput
            style={styles.input1}
            placeholder='Enter Household No.'
            value={householdno}
            onChangeText={setHouseholdNo}
            placeholderTextColor={"#888"}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>  
                <Text style={styles.saveButtonText}>Save</Text>  
                </TouchableOpacity>

        </View>
     </ScrollView>
  )
}

export default infopage

const styles = StyleSheet.create({
  reactLogo: {
    height: 130,
    width: 350,
    bottom: 0,
    left: 6,
    top: 20,
    position: 'relative',
  },
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
    justifyContent: "center",
  },
  container1:{
    backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
    flex: 1,
    padding: 20,
    justifyContent: "center",
    
  },
  container2:{
    backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
    flex: 1,
    padding: 20,
    justifyContent: "center",
    
  },
  header:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#d97706", // Darker text color for contrast
    textAlign: "center",
    marginBottom: 30,
    top: 20,
  },
  input: {
    height: 50,
    borderColor: '#64748b',
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
  },
  input1:{
    height: 50,
    borderColor: '#64748b',
    borderWidth:  1,
    borderRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff", // White background for input fields
    shadowColor: "#000", // Shadow for subtle elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation on Android
  },
  picker:{
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
    paddingVertical: 12,  
    paddingHorizontal: 20,  
    marginBottom: -10, 
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