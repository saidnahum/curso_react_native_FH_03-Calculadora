import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../theme/appTheme';

export default class CalculadoraScreen extends Component {
   render() {
      return (
         <View style={ styles.calculadoraContainer }>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>

            <View>
               {/* Boutton */}
               <View>
                  <Text>1</Text>
               </View>
            </View>
         </View>
      )
   }
};