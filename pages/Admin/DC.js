import React, { useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text ,ScrollView} from 'react-native';

 const App=()=> {
 
    const[user,setUser]=useState('')  ;
    const [addresss,setAddress]=useState('');
    const[name,setName]=useState('')  ;
    const[mobile,setMobile]=useState('')  ;
    const[specialization,setSpecialization]=useState('')  ;
    const[hospital_name,setHospital_name]=useState('')  ;


  const onLogin=() =>{

//    Alert.alert("Hi")
    // console.log(e)
    Alert.alert(user
        +name+addresss+mobile+specialization+hospital_name);
    
  }

 
    return (
        < ScrollView>
      <View style={styles.container}>
          <View style={{flexDirection:'row',marginTop:5}}>
             <Text style={styles.inputt} >User</Text>
           <TextInput        
          onChangeText={(User) => setUser( User )}
        //   placeholder='Name'
          placeholderTextColor="#8b9cb5"               
          style={styles.input}
        />
        </View>
            <Text  >Name</Text>
           <TextInput        
          onChangeText={(Name) => setName( Name )}
        //   placeholder='Name'
          placeholderTextColor="#8b9cb5"               
          style={styles.input}
        />
          <Text  >Address</Text>
          <TextInput
                style={styles.input}
                onChangeText={(Address) => setAddress(Address)}
                // placeholder="Enter Address" 
                placeholderTextColor="#8b9cb5"               
              /> 
                <Text  >Mobile</Text>      
        <TextInput        
          onChangeText={(Mobile) => setMobile( Mobile )}
        //   placeholder='Mobile'
          placeholderTextColor="#8b9cb5"               
          style={styles.input}
        />
          <Text  >Specialization</Text>
         <TextInput        
          onChangeText={(Specialization) => setSpecialization( Specialization )}
        //   placeholder=''
          placeholderTextColor="#8b9cb5"               
          style={styles.input}
        />
          <Text  >Hospital Name</Text>
         <TextInput        
          onChangeText={(Hospital_name) => setHospital_name( Hospital_name )}
        //   placeholder='Mobile'
          placeholderTextColor="#8b9cb5"               
          style={styles.input}
        />
     
        
       
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={onLogin}
        />
      </View>
      </ScrollView>
    );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:"row",
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,

  },
  inputt: {
    width: 100,
    height: 44,
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: 10,
  },
});

export default App;