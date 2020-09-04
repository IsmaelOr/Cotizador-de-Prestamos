import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    YellowBox,
  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';


export default function Form(props){

    const {setCapital, setInterest, setMonths} = props;

    return(
            <View style={styles.viewForm}>
                <View style={styles.viewInput}>
                    <TextInput placeholder="Cantidad a Pedir" keyboardType="numeric" style={styles.Input} onChange={(e) => setCapital(e.nativeEvent.text) }/>
                    <TextInput placeholder="Interes %" keyboardType="numeric" style={[styles.Input, styles.Input2]} onChange={(f) => setInterest(f.nativeEvent.text) }/>
                </View>
            <RNPickerSelect style={pickerSelectStyles} useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMonths(value)}
            placeholder={
                {label:'Selecciona los plazos', value: null,}
            }
            items={[
                { label: '3 Meses', value: 3 },
                { label: '6 Meses', value: 6 },
                { label: '12 Meses', value: 12 },
                { label: '24 Meses', value: 24 },
            ]}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInput:{
        flexDirection: "row",
    },
    Input:{
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "65%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 10,
    },
    Input2:{
        width: "35%",
        marginLeft: 5,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
      backgroundColor: '#fff',
      marginLeft: -5,
      marginRight: -5,
    },
    inputAndroid: {
      fontSize: 15,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: colors.PRIMARY_COLOR,
      borderRadius: 5,
      color: 'black',
      paddingRight: 30,
      backgroundColor: 'white',
    },    
  });
