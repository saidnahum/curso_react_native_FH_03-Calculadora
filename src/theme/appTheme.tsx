import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   fondo: {
      flex: 1,
      backgroundColor: 'black',
   },
   calculadoraContainer:{
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'flex-end'
   },
   result: {
      color: 'white',
      fontSize: 80,
      textAlign: 'right',
      fontWeight: '300',
      marginBottom: 10
   },
   smallResult: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 30,
      textAlign: 'right',
   },
   fila: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 18,
      paddingHorizontal: 10
   },
   boton: {
      height: 80,
      width: 80,
      backgroundColor: '#9B9B9B',
      borderRadius: 100,
      justifyContent:'center',
      marginHorizontal: 5
   },
   botonTexto: {
      textAlign: 'center',
      padding: 10,
      fontSize: 40,
      color: 'white',
      fontWeight: 'bold',
   }
});