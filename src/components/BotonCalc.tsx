import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props {
   texto: string;
   colorBoton?: string;
   botonAncho?: boolean;
}

const BotonCalc = ({ texto, colorBoton = '#2D2D2D', botonAncho = false }: Props) => {
   return (
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
            fontWeight: '600'
         }}>{texto}</Text>
      </View>
   )
}

export default BotonCalc