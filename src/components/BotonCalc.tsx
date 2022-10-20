import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
   texto: string;
   colorBoton?: string;
   botonAncho?: boolean;
   accion: ( numeroTexto: string ) => void
}

const BotonCalc = ({ texto, colorBoton = '#2D2D2D', botonAncho = false, accion }: Props) => {
   return (
      <TouchableOpacity onPress={() => accion(texto)}>
         <View style={{
            ...styles.boton,
            backgroundColor: colorBoton,
            width: (botonAncho) ? 180 : 80
         }}>
            <Text style={{
               ...styles.botonTexto,
               color: (colorBoton == '#9B9B9B') ? 'black' : 'white',
               textAlign: (botonAncho) ? 'left' : 'center',
               marginLeft: (botonAncho) ? 20 : 0,
               fontWeight: '400'
            }}>{texto}</Text>
         </View>
      </TouchableOpacity>
   )
}

export default BotonCalc