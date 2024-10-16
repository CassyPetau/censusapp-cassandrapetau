import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HelloWave } from '@/components/HelloWave'
import { useNavigation } from 'expo-router';

const logout = () => {
    const navigation = useNavigation();

    const handleLogout = () => {

     Alert.alert(  
      "Logged Out",  
      "You have been successfully logged out.",  
      [  
        { text: "OK", onPress: () => navigation.navigate("index") } // Navigate to login screen  
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
            <Text style={styles.header}>Thankyou for your Participation !!</Text>
              
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>  
                <Text style={styles.logoutButtonText}>Log Out</Text>  
                </TouchableOpacity> 

        </View>
            <View style={styles.container1}>
               
            </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
        justifyContent: "center",
    },
    container1:{

    },
    reactLogo:{
        height: 130,
        width: 350,
        bottom: 0,
        left: 6,
        top: 20,
        position: 'relative',
    },
    header:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#d97706", // Darker text color for contrast
        textAlign: "center",
        marginBottom: 30,
        top: 180,
        padding: 5
    },
    logoutButton: {  
        backgroundColor: "#4caf50", // A contrasting color for the logout button  
        borderRadius: 12,  
        paddingVertical: 15,  
        paddingHorizontal: 50,  
        marginBottom: 20, 
        marginTop: 440,
        elevation: 3, // Elevation on Android
        alignItems: 'center',  
      },  
      logoutButtonText: {  
        color: "#fff",  
        fontSize: 18,  
        fontWeight: "bold",
        textAlign: "center", 
      },  
})


export default logout