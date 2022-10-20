import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {

   const {
      numero,
      numeroAnterior,
      limpiar,
      armarNumero,
      positivoNegativo,
      btnDel,
      btnDividir,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular
   } = useCalculadora();

   return (
      <View style={styles.calculadoraContainer}>
         {
            numeroAnterior !== '0' && (
               <Text style={styles.smallResult}>{numeroAnterior}</Text>
            )
         }
         <Text
            style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
         >{numero}</Text>

         {/* Fila de botones */}
         <View style={styles.fila}>
            <BotonCalc texto="C" colorBoton="#9B9B9B" accion={limpiar} />
            <BotonCalc texto="+/-" colorBoton="#9B9B9B" accion={positivoNegativo} />
            <BotonCalc texto="del" colorBoton="#9B9B9B" accion={btnDel} />
            <BotonCalc texto="÷" colorBoton="#FF9427" accion={btnDividir} />
         </View>

         <View style={styles.fila}>
            <BotonCalc texto="7" accion={armarNumero} />
            <BotonCalc texto="8" accion={armarNumero} />
            <BotonCalc texto="9" accion={armarNumero} />
            <BotonCalc texto="x" colorBoton="#FF9427" accion={btnMultiplicar} />
         </View>

         <View style={styles.fila}>
            <BotonCalc texto="4" accion={armarNumero} />
            <BotonCalc texto="5" accion={armarNumero} />
            <BotonCalc texto="6" accion={armarNumero} />
            <BotonCalc texto="-" colorBoton="#FF9427" accion={btnRestar} />
         </View>

         <View style={styles.fila}>
            <BotonCalc texto="1" accion={armarNumero} />
            <BotonCalc texto="2" accion={armarNumero} />
            <BotonCalc texto="3" accion={armarNumero} />
            <BotonCalc texto="+" colorBoton="#FF9427" accion={btnSumar} />
         </View>

         <View style={styles.fila}>
            <BotonCalc texto="0" botonAncho={true} accion={armarNumero} />
            <BotonCalc texto="." accion={armarNumero} />
            <BotonCalc texto="=" colorBoton="#FF9427" accion={calcular} />
         </View>
      </View>
   )
};

export default CalculadoraScreen;