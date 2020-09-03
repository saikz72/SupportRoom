import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const subSignupScreenCourses = ({ navigation }) => {
  return (
    <View style={styles.fullPage}>
      <Text style={styles.majorText}>Add to your courses list.</Text>
      <TextInput 
          style = {styles.majorTI}
          placeholder= "start typing course name"
          placeholderTextColor= 'rgb(207, 207, 207)'
          autoCorrect = {false}
        />
        <View style={styles.statusBarView}>
            <Text style={styles.statusText}>3 of 3</Text>
            <Image source = {require("../../assets/3of3.png")} style={styles.statusBar}></Image>
        </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(232, 232, 232)',
  },
  majorText:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(61, 139, 227)'
  },
  majorTI:{
    borderColor: 'rgb(61, 139, 227)',
    backgroundColor: 'rgba(0,0,0,0)',
    height: 65,
    width: 320,
    marginVertical: 10,
    borderRadius: 4,
    fontSize: 18,
    color: 'black',
    borderBottomWidth: 2,
    fontSize: 30   
  },
  statusBar:{
    height: 15,
    width: 320,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20
  },
  statusBarView:{
    width: 320,
  },
  statusText:{
      fontSize: 15,
      fontWeight: '700',
      marginTop: 20,
      alignSelf: 'flex-end',
      color: 'grey'
  }
});

export default subSignupScreenCourses;
