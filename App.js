import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LogBox,
  Button,
} from 'react-native';

import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';
import ResultCalculation from './src/components/ResultCalculation';
LogBox.ignoreLogs(["Picker has been extracted"]);

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if(capital && interest && months){ 
    calculate();
    }
    else{
      reset();
    }
  }, [capital,interest,months]);

  const calculate = () => {
    reset();
    if(!capital){
      setError("Añade la cantidad a prestar");
    }
    else if(!interest){
      setError("Añade el interes de prestamo");
    }
    else if(!months){
      setError("Selecciona los meses del prestamo");
    }
    else{
      const i = interest/100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPay: (fee * months).toFixed(2)
      });

    }
  };

  const reset = () => {
    setError("");
    setTotal(null);
  };

  return(
    <>
    <StatusBar barStyle="ligh-content"/>
    <View>
    </View>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}/>
      <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
      <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}/>
    </SafeAreaView>
      <ResultCalculation capital={capital} interest={interest} months={months} total={total} error={error}/>
      <Footer calculate={calculate}/> 

    </>
  );
}

  const styles = StyleSheet.create({
    safeArea: {
      height: 290,
      alignItems: 'center',
    },
    background: {
      backgroundColor: colors.PRIMARY_COLOR,
      height: 200,
      width: '100%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      position: 'absolute',
      zIndex: -1,
    },
    titleApp: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 25,
    },
  });