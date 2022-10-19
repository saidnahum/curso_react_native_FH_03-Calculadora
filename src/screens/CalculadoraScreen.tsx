import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

export default class CalculadoraScreen extends Component {
   render() {
      return (
         <View style={ styles.calculadoraContainer }>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
               <BotonCalc texto="C" colorBoton="#9B9B9B"/>
               <BotonCalc texto="+/-" colorBoton="#9B9B9B"/>
               <BotonCalc texto="del" colorBoton="#9B9B9B"/>
               <BotonCalc texto="÷" colorBoton="#FF9427"/>
            </View>

            <View style={styles.fila}>
               <BotonCalc texto="7"/>
               <BotonCalc texto="8"/>
               <BotonCalc texto="9"/>
               <BotonCalc texto="x" colorBoton="#FF9427"/>
            </View>

            <View style={styles.fila}>
               <BotonCalc texto="4"/>
               <BotonCalc texto="5"/>
               <BotonCalc texto="6"/>
               <BotonCalc texto="-" colorBoton="#FF9427"/>
            </View>

            <View style={styles.fila}>
               <BotonCalc texto="1"/>
               <BotonCalc texto="2"/>
               <BotonCalc texto="3"/>
               <BotonCalc texto="+" colorBoton="#FF9427"/>
            </View>

            <View style={styles.fila}>
               <BotonCalc texto="0" botonAncho={true}/>
               <BotonCalc texto="."/>
               <BotonCalc texto="=" colorBoton="#FF9427"/>
            </View>
         </View>
      )
   }
};