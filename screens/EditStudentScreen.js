import { View, Text, StyleSheet, StatusBar, TextInput, Button} from 'react-native'
import React, {useState} from 'react'
import { students } from '../students'
import { useNavigation } from '@react-navigation/native';
const EditStudentScreen = ({route}) => {
  const navigation=useNavigation()
  const {estudentIndex} = route.params
  const [registration,setRegistration]=useState(students[estudentIndex][0]);
  const [name,setName]=useState(students[estudentIndex][1]);
  const [lastName,setLastName]=useState(students[estudentIndex][2]);
  const [group,setGroup]=useState(students[estudentIndex][3]);
  const [average,setAverage]=useState(students[estudentIndex][4]);
  const [student, setStudent] = useState([]);
  const edit = () =>{
    student.push(registration)
    student.push(name)
    student.push(lastName)
    student.push(group)
    student.push(average)
    console.log(student)
    students.splice(estudentIndex,1,student.slice())
    console.log(students)
    student.splice(0)
    console.log(student)
    navigation.navigate("Lista")
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, marginBottom:10, marginTop:15}}>Editar Estudiante</Text>
        <Text style={styles.text}>Matricula:</Text>
        <TextInput style={styles.textInput} defaultValue={students[estudentIndex][0]} onChangeText={(text)=>setRegistration(text)}></TextInput>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput style={styles.textInput} defaultValue={students[estudentIndex][1]} onChangeText={(text)=>setName(text)}></TextInput>
        <Text style={styles.text}>Apellido:</Text>
        <TextInput style={styles.textInput} defaultValue={students[estudentIndex][2]} onChangeText={(text)=>setLastName(text)}></TextInput>
        <Text style={styles.text}>Grupo:</Text>
        <TextInput style={styles.textInput} defaultValue={students[estudentIndex][3]} onChangeText={(text)=>setGroup(text)}></TextInput>
        <Text style={styles.text}>Promedio:</Text>
        <TextInput style={styles.textInput} defaultValue={`${students[estudentIndex][4]}`} onChangeText={(text)=>setAverage(text)}></TextInput>
        <Button color={"#042B4E"} style={styles.button} title="Actualizar" onPress={()=>edit()}></Button>
      <StatusBar style="auto"/>
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
    backgroundColor:"#B1D9FB",
    borderRadius:10,
    width:"80%",
    height:35,
    marginBottom:10
  },
  button:{
    borderRadius:40,
    marginBottom:5
  }
});

export default EditStudentScreen
