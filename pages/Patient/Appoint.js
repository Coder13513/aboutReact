import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';


import { Formik } from 'formik'


function Appoint() {

  // onSubmit method
  const onSubmit = (data) => {
    console.log(doctorName, patientName);
  }

  useEffect(() => {
    console.log("In UseEffect")
    docData();
  }, []);

  const docData = () => {
    console.log("InDocData");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        {userValues.map((item, key) => (
                  <Picker.Item label={item.id} value={item.id} key={key} />)
                )}
        setUserValues(json)

      })
  }




    const [patientId, setPatientId] = useState('')
    const [doctorId, setDoctorId] = useState('')
    const [patientName, setPatientName] = useState('')
    const [doctorName, setdoctorName] = useState('')
    const [appointmentDate, setAppointmentDate] = useState('')
    const [status, setStatus] = useState('')
    const [userValues, setUserValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [date, setDate] = useState('09-10-2020');



    return (


      <View>
        <Formik>
          <View>



            <View style={styles.SectionStyle}>

              <Text style={styles.text}>Patient Id</Text>

              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={styles.pickerinput}>
                {userValues.map((item, key) => (
                  <Picker.Item label={item.id} value={item.id} key={key} />)
                )}

              </Picker>

            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.text}>Doctor Id</Text>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={styles.pickerinput}>
                {userValues.map((item, key) => (
                  <Picker.Item label={item.name} value={item.name} key={key} />)
                )}

              </Picker>

            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.text}>Doctor Name</Text>
              <TextInput style={styles.input}
                onChangeText={(doctorName) => setdoctorName(doctorName)}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.text}>Patient Name</Text>
              <TextInput style={styles.input}
                onChangeText={(PatientName) => setPatientName(PatientName)}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.text}>Appointment Date</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2021"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />

            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.text}>Status</Text>
              <Picker style={styles.pickerinput}>
                <Picker.Item label="Pending" value="0" />
                <Picker.Item label="Confirmed" value="1" />
              </Picker>

            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={onSubmit}>
              <Text style={styles.buttonTextStyle}>
                Submit
            </Text>
            </TouchableOpacity>

          </View>
        </Formik>
      </View>
    )
  }


export default Appoint


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',

  },
  pickerinput: {
    flex: 1,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'red',
    margin: -5,
    fontSize: 15,
    marginLeft: 40
  },

  text: {
    margin: 10,
    fontSize: 16
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  datePickerStyle: {
    width: 150,
    marginTop: 5,
  }
})
