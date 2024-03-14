import { View, Text, StyleSheet, StatusBar, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import { students } from '../students';
import { useNavigation } from '@react-navigation/native';


const StudentFormScreen = () => {
    const navigation=useNavigation()
    const [controlNumber,setControlNumber]=useState('');
    const [name,setName]=useState('');
    const [lastName,setLastName]=useState('');
    const [grade,setGrade]=useState('');
    const [average,setAverage]=useState('');
    const [student, setStudent] = useState([]);
    const save=()=>{
        student.push(controlNumber)
        student.push(name)
        student.push(lastName)
        student.push(grade)
        student.push(average)
        console.log(student)
        students.push(student.slice())
        console.log(students)
        student.splice(0)
        console.log(student)
        navigation.navigate("Lista")
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={{fontSize:30, marginBottom:20, marginTop:15}}>Nuevo Estudiante</Text>
      <Text style={styles.text}>Matricula:</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setControlNumber(text)}></TextInput>
      <Text style={styles.text}>Nombre:</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setName(text)}></TextInput>
      <Text style={styles.text}>Apellido:</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setLastName(text)}></TextInput>
      <Text style={styles.text}>Grado:</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setGrade(text)}></TextInput>
      <Text style={styles.text}>Promedio:</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setAverage(text)}></TextInput>
      <Button color={"#042B4E"} style={styles.button} title="Guardar" onPress={()=>save()}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#168CF3",
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginBottom:5,
  },
  body:{
    backgroundColor: '#B1D9FB',
    width:"80%",
    height:"80%",
    borderRadius:10,
    alignItems:"center",
    marginTop: 50
  },
  textInput:{
    backgroundColor:"#fff",
    borderRadius:10,
    width:"80%",
    height:35,
    marginBottom:10,
    backgroundColor: '#B1D9FB'
  },
  button:{
    borderRadius:40,
    marginBottom:5
  }
});

export default StudentFormScreen

