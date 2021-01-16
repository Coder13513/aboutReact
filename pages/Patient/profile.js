import React , {Component} from 'react';
import {View , Text , Button , TextInput , TouchableOpacity , ScrollView ,ActivityIndicator,StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Toast from 'react-native-simple-toast';




export default class Profile extends Component{
  state={
    first_name: "",
    last_name: "",
    phone_Number: "",
    town_city: "",
    zip_code: "",
    token:"",
    loading:false
  };

  componentDidMount(){
    this.getTokenhandler()
  }

  async getTokenhandler(){
      var self= this;
      let token = await AsyncStorage.getItem('token')
      this.setState({token:token})
    }



  firstNameChangeHandler = value =>{
    this.setState({
      first_name:value
    })
  };
  lastNameChangeHandler = value =>{
    this.setState({
      last_name:value
    })
  };
  numberChangeHandler = value =>{
    this.setState({
      phone_Number:value
    })
  };
  cityChangeHandler = value =>{
    this.setState({
      town_city:value
    })
  };;
  zipCodeChangeHandler = value =>{
    this.setState({
      zip_code:value
    })
  };


  onPostHandler = async() =>{
  		this.setState({loading:true})
        var self      = this;
        var token     = this.state.token;
        let res = await axios.post("http://100.25.15.160/customer/create/",
          {
            first_name: this.state.first_name,
    		last_name: this.state.last_name,
    		phone_Number: this.state.phone_Number,
    		town_city: this.state.town_city,
    		zip_code: this.state.zip_code
          },
          {
            headers:{Authorization:token}
          }
          )
      		if (res.data.status===201){
				this.props.navigation.navigate('login')
        Toast.show("successfully created please login..",Toast.LONG)

				} else {
				  this.setState({loading:false})
				  console.log(res.data.message)
				  Toast.show(res.data.message,Toast.LONG)
				}
  }

  




  render(){
  	if(this.state.loading){
			return (
            <View style={styles.activitycontainer}>
            	<View style={styles.activityStyle}>
	                <ActivityIndicator size="large" color="#17baa1" />
	                <StatusBar barStyle="default" />
                </View>
            </View>
        )
		}
		else{
    return(
        <ScrollView style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.tetxStyle}>Create Profile</Text>
          </View>
          <View style={styles.container}>

            <Text style={styles.tetxStyle}>First Name</Text>
            <TextInput
            value={this.state.first_name}
            style={styles.inputStyle} 
            onChangeText={this.firstNameChangeHandler}/>

            <Text style={styles.tetxStyle}>Last Name</Text>
            <TextInput
            value={this.state.last_name}
            style={styles.inputStyle} 
            onChangeText={this.lastNameChangeHandler}/>

            <Text style={styles.tetxStyle}>Phone</Text>
            <TextInput
            value={this.state.phone_Number}
            style={styles.inputStyle} 
            onChangeText={this.numberChangeHandler}/>

            <Text style={styles.tetxStyle}>City</Text>
            <TextInput
            value={this.state.town_city}
            style={styles.inputStyle} 
            onChangeText={this.cityChangeHandler}/>


            <Text style={styles.tetxStyle}>Zipcode</Text>
            <TextInput
            value={this.state.zip_code}
            style={styles.inputStyle} 
            onChangeText={this.zipCodeChangeHandler}/>

            <TouchableOpacity style={{marginTop:20}} >
                <Button color="#17baa1" title="create"
                   onPress={this.onPostHandler}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
  }
  }
}



const styles = {
		activityStyle:{
		padding:30,
		// borderWidth:1,
		borderRadius:5,
		backgroundColor:"#fff",
		borderColor:"#17baa1"

	},
	activitycontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
        mainContainer:{
          flex:1,
          padding:8,
          // alignItems:"center"
          backgroundColor:"#fff",
        },
        container:{
          borderWidth:1,
          margin:10,
          borderRadius:3,
          borderColor:"rgb(204, 204, 204)",
          backgroundColor:"rgb(245, 245, 245)",
          padding:15

        },
        tetxStyle:{
          fontSize:20,
          fontWeight:"bold",
          color:"#333",
          margin:5
        },
        inputStyle:{
          borderWidth:1,
          borderRadius:3,
          borderColor:"rgb(204, 204, 204)",
          backgroundColor:"#fff",
          padding:5
        }

}