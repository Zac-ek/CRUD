import { View, Text, Button, FlatList, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import { students } from '../students'

const StudentList = ({navigation}) => {
  const [recharge, setRecharge] = useState(0);

  const Recharge = () => {
    setRecharge(recharge + 1);
    console.log("Page recharged")
  };

  const deleteStudent=(index)=>{
    students.splice(index,1);
    Recharge()
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Page Focus'); 
      Recharge()
    });

    return unsubscribe;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.group}>
            <View>
              <Text style={styles.box}>Matricula: {item[0]}</Text>
              <Text style={styles.box}>Nombre: {item[1]}</Text>
              <Text style={styles.box}>Apellidos: {item[2]}</Text>
              <Text style={styles.box}>Grupo: {item[3]}</Text>
              <Text style={styles.box}>Promedio: {item[4]}</Text>
            </View>
            <Button color={"#042B4E"} title='Editar' onPress={()=>{
              let estudentIndex = students.indexOf(item)
              navigation.navigate("Editar",{estudentIndex})}} style={styles.buton}/>
            <Button color={"#042B4E"} title='Borrar' onPress={()=>{deleteStudent(students.indexOf(item))}}/>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button color={"#042B4E"} title='Nuevo' onPress={()=>{navigation.navigate("Registro")}}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1D9FB',
    padding: 15
    // alignItems: 'center'
  },
  group: {
    flexDirection: 'column',
    paddingVertical: 10,
    backgroundColor:"#2A96F4",
    gap: 7,
    marginBottom: 15,
    borderRadius: 15
  },
  box: {
    flex: 1,
    textAlign: 'center',
  },
  buton:{
    flex: 1,
    textAlign: 'center',
    width:10,
    height:1
  }
});

export default StudentList