import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('census');

export interface Person {
        id: number;
        firstName: string;
        lastName: string;
        date: string; // Consider using a Date type depending on your date format
        relationship: string;
        gender: string;
        maritalStatus: string;
        citizen: string;
       
    }
    export const initializeDB = async () => {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;

            CREATE TABLE IF NOT EXISTS person (
            id INTEGER PRIMARY KEY NOT NULL,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            date TEXT NOT NULL,
            relationship TEXT NOT NULL,
            gender TEXT NOT NULL,
            maritalStatus TEXT NOT NULL,
            citizen TEXT NOT NULL
            );
        `);
    };
    
export const addPerson = async (
    firstName: string, 
    lastName: string, 
    date: string, 
    relationship: string, 
    gender: string, 
    maritalStatus: string, 
    citizen: string, ) => {
try {
const result = await db.runAsync('INSERT INTO person (firstName, lastName, date, relationship, gender, maritalStatus, citizen) VALUES (?, ?, ?, ?, ?, ?, ?)', firstName, lastName, relationship, date, gender, maritalStatus, citizen );
return result.lastInsertRowId; 
} catch (error) {
    console.error("Error adding person:", error);
    }
    };
export const updatePerson = async (
    id: number, 
    firstName: string, 
    lastName: string, 
    date: string, 
    relationship: string, 
    gender: string, 
    maritalStatus: string, 
    citizen: string) => {
    try {
    await db.runAsync('UPDATE person SET firstName = ?, lastName = ?, date = ?, relationship = ?, gender = ?, maritalStatus = ?, citizen = ?  WHERE id = ?', firstName, lastName, date, relationship, gender, maritalStatus, citizen, id);
    } catch (error) {
    console.error("Error updating person:", error);
    }
    };
    export const deletePerson = async (id: number) => {
    try {
    await db.runAsync('DELETE FROM person WHERE id = ?', id);
    } catch (error) {
    console.error("Error deleting person:", error);
    }
    };
    export const getPersons = async () => {
    try {
    const allRows = await db.getAllAsync('SELECT * FROM person') as Person[];
    return allRows;
    } catch (error) {
    console.error("Error getting persons:", error);
    return [];
    }
    };