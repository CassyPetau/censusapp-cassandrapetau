import React, { useEffect, useState } from "react";
import {
View,
TextInput,
Text,
Button,
StyleSheet,
Platform,
Alert,
TouchableOpacity,
ScrollView,
Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
    addPerson,
    getPersons,
    updatePerson,
    deletePerson,
    initializeDB,
    Person,
    } from "@/database"; // Import initializeDB



const Dashboard = () => {
    // States for inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [relationship, setRelationship] = useState("Set Relationship");
    const [gender, setGender] = useState("Select Gender"); // Default dropdown value
    const [maritalStatus, setMaritalStatus] = useState("Select Marital Status");
    const [citizen, setCitizen] = useState("Select Citizenship");
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false); // Handlevisibility of Date Picker
    const [persons, setPersons] = useState<Person[]>([]);
    const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
    const [editingPersonId, setEditingPersonId] = useState<number | null>(null); // Track if updating a person


    const onChangeDate = (
            event: { nativeEvent: { timestamp: number } },
            selectedDate?: Date
    ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    };

    const fetchPersons = async () => {
        const allPersons = await getPersons();
        setPersons(allPersons);
    };

    useEffect(() => {
        const setupDatabase = async () => {
        await initializeDB();
        fetchPersons();
        };
    setupDatabase();
    }, []);

    const handleSubmit = async () => {
        if (
            !firstName ||
            !lastName ||
            gender === "Select Gender"||
            relationship === "Select Relationship" ||
            maritalStatus === "Select Marital Status" ||
            citizen === "Select Citizenship"
        ) {
            Alert.alert("Error", "Please fill in all fields correctly.");
            return;
        }
        try {
            if (editingPersonId) {
            // Update existing person
            await updatePerson(
            editingPersonId,
            firstName,
            lastName,
            relationship,
            date.toISOString(),
            gender,
            maritalStatus,
            citizen,
        );
    console.log("Person updated successfully");
        } else {
        // Add new person
        const id = await addPerson(
        firstName,
        lastName,
        relationship,
        date.toISOString(),
        gender,
        maritalStatus,
        citizen,
        );
        console.log("Person created successfully with ID:", id);
    }
    resetForm();
    fetchPersons(); // Refresh the list
    } catch (error) {
    console.error("Error submitting person:", error);
    }
    };
    const handleDelete = async (id: number) => {
        try {
            await deletePerson(id);
            console.log("Person deleted successfully");
            fetchPersons(); // Refresh the list after deleting
    } catch (error) {
    console.error("Error deleting person:", error);
    }
    };

    const handleUpdateClick = (person: Person) => {
        // Populate the form with the selected person's data
        setFirstName(person.firstName);
        setLastName(person.lastName);
        setRelationship (person.relationship);
        setGender(person.gender);
        setMaritalStatus(person.maritalStatus);
        setCitizen(person.citizen);
        setDate(new Date(person.date)); // Assuming dateOfBirth is a string
        setEditingPersonId(person.id); // Set the ID for updating
    };
    const resetForm = () => {
        // Clear the form after submission or update
        setFirstName("");
        setLastName("");
        setRelationship("Select Relationship");
        setGender("Select Gender");
        setMaritalStatus("Select Marital Status")
        setCitizen("Select Citizenship")
        setDate(new Date());
        setEditingPersonId(null); // Reset ID for creating new entries
    };



return (
    <ScrollView>
        <View style={styles.container}>
        <View>
            <Image
            source={require('@/assets/images/header_image.png')}
            style={styles.reactLogo}
            />
        </View>
            <Text style={styles.header}>Personal Information Section</Text>
            {/* Text Input 1 */}
            <TextInput
                style={styles.input}
                placeholder="Enter Given Name"
                value={firstName}
                onChangeText={setFirstName}
                placeholderTextColor="#888" // Modern touch: lighter placeholder color
            />
            {/* Text Input 2 */}
            <TextInput
                style={styles.input}
                placeholder="Enter Surname"
                value={lastName}
                onChangeText={setLastName}
                placeholderTextColor="#888"
            />
            <Picker
                selectedValue={relationship}
                onValueChange={(itemValue) => setRelationship(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label={"Select Relationship"} />
                <Picker.Item label="Head of Household" value="head of household" />
                <Picker.Item label="Husband" value="husband" />
                <Picker.Item label="Wife" value="wife" />
                <Picker.Item label="Own Son" value="own son" />
                <Picker.Item label="Own Daughter" value="own daughter" />
                <Picker.Item label="Son in-law" value="son in-law" />
                <Picker.Item label="Daughter in-law" value="daughter in-law" />
                <Picker.Item label="Adopted Child" value="adopted child" />
                <Picker.Item label="Step Child" value="step child" />
                <Picker.Item label="Father" value="father" />
                <Picker.Item label="Mother" value="mother" />
                <Picker.Item label="Brother" value="brother" />
                <Picker.Item label="Sister" value="sister" />
                <Picker.Item label="Grand Child" value="grand child" />
                <Picker.Item label="Great-grand child" value="great-grand child" />
                <Picker.Item label="Father in-law" value="father in-law" />
                <Picker.Item label="Mother in-law" value="mother in-law" />
                <Picker.Item label="Brother in-law" value="brother in-law" />
                <Picker.Item label="Sister in-law" value="sister in-law" />
                <Picker.Item label="Other relative" value="other relative" />
                <Picker.Item label="Non-relative" value="non-relative" />
            </Picker>

            {/* Dropdown Picker */}
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label={"Select Gender"} />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
            </Picker>

            {/* Date Picker */}
            <View>
            <Button
                title="Select Date of Birth"
                onPress={() => setShowDatePicker(true)}
            ></Button>
            {showDatePicker && (
            <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
            />
            )}
            <Text style={styles.dateText}>
                Date of Birth: {date.toDateString()}
            </Text>
            </View>

            {/* Dropdown Picker */}
            <Picker
                selectedValue={maritalStatus}
                onValueChange={(itemValue) => setMaritalStatus(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label={"Select Marital Status"} />
                <Picker.Item label="Married/Living Together" value="married" />
                <Picker.Item label="Seperated" value="Seperated" />
                <Picker.Item label="Divorced" value="Divorced" />
                <Picker.Item label="Widowed" value="Widowed" />
            </Picker>

            {/* Dropdown Picker */}
            <Picker
                selectedValue={citizen}
                onValueChange={(itemValue) => setCitizen(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label={"Select Citizenship"} />
                <Picker.Item label="PNG Citizen" value="png citizen" />
                <Picker.Item label="Non-PNG Citizen" value="non-png citizen" />
            </Picker>


        
            <Button
            title={selectedPerson ? "Update" : "Submit"}
            onPress={handleSubmit}
            />

            {/* Table to display records */}
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>First Name</Text>
                    <Text style={styles.tableHeaderText}>Last Name</Text>
                    <Text style={styles.tableHeaderText}>Relationship</Text>
                    <Text style={styles.tableHeaderText}>Gender</Text>
                    <Text style={styles.tableHeaderText}>Date of Birth</Text>
                    <Text style={styles.tableHeaderText}>Marital Status</Text>
                    <Text style={styles.tableHeaderText}>Citizenship</Text>
                    <Text style={styles.tableHeaderText}>Actions</Text>
                </View>
                {persons.map((person) => (
                <View key={person.id} style={styles.tableRow}>
                    <Text style={styles.tableRowText}>{person.firstName}</Text>
                    <Text style={styles.tableRowText}>{person.lastName}</Text>
                    <Text style={styles.tableRowText}>{person.relationship}</Text>
                    <Text style={styles.tableRowText}>{person.gender}</Text>
                    <Text style={styles.tableRowText}>{person.date}</Text>
                    <Text style={styles.tableRowText}>{person.maritalStatus}</Text>
                    <Text style={styles.tableRowText}>{person.citizen}</Text>
                    <Text style={styles.tableRowText}>
                        {new Date(person.date).toDateString()}
                    </Text>
                    <View style={styles.actionButtons}>
                    
                        <TouchableOpacity
                        style={styles.updateButton}
                        onPress={() => handleUpdateClick(person)}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => handleDelete(person.id)}
                        >
                        <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                ))}
            </View>
        </View> 
    </ScrollView>
    );
};
// Styling for a modern look
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#0c4a6e", // Slightly off-white for a modern clean background
        justifyContent: "center",
    },
    reactLogo: {
        height: 130,
        width: 350,
        bottom: 0,
        left: 6,
        top: 20,
        position: 'relative',
      },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#d97706", // Darker text color for contrast
        textAlign: "center",
        marginBottom: 30,
        top: 20,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12, // Rounded corners for a modern feel
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: "#fff", // White background for input fields
        shadowColor: "#000", // Shadow for subtle elevation
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Elevation on Android
        
    },
    picker: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    dateText: {
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 12,
        fontSize: 16,
        color: "#d97706", // Subtle gray for date display
    },
    buttonProps: {
        backgroundColor: "#65a30d",
    },
    tableContainer: {
        marginTop:20,
      },
    tableHeader: {
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    tableHeaderText: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
    },
    tableRow: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    tableRowText: {
        flex: 1,
        textAlign: "center",
    },
    actionButtons: {
        flexDirection: "row",
        padding: 10,
    },
    updateButton: {
        backgroundColor: "#4CAF50",
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: { backgroundColor: "#F44336", padding: 5, borderRadius: 5 },
    buttonText: { color: "#fff", fontWeight: "bold" },
});
export default Dashboard;