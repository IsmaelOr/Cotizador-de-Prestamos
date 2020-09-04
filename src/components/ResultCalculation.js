import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function ResultCalculation(props){
    const {capital, interest, months, total, error} = props;
    return(
        <View style={styles.contenido}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}> RESUMEN </Text>
                    <DataResult titulo={"Cantidad Prestada:"} valor={`$ ${capital}`} />
                    <DataResult titulo={"Ineteres:"} valor={`${interest} %`} />
                    <DataResult titulo={"Plazos: "} valor={`${months} Meses`} />
                    <DataResult titulo={"Pago Mensual: "} valor={`$ ${total.monthlyFee} `} />
                    <DataResult titulo={"Total: "} valor={`$ ${total.totalPay}`}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    );
}

function DataResult(props){
    const {titulo, valor} = props;

    return(
        <View style={styles.value}>
                        <Text>{titulo}</Text>
                        <Text>{valor}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contenido:{
        marginTop: 0,
        marginHorizontal: 40,
    },
    error: {
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    boxResult:{
        padding: 30,
    },
    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30,
    },
    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,

    }
});