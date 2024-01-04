import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boxLogin: {
        height:"100%",
        width:"100%",
        alignItems:"center",
        backgroundColor:"#ffffff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
        alignItems:"center",
    },
    login:{
        fontSize:20,      
    },
    password:{
        fontSize:18,
    },
    signin:{
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
        alignItems:"center",
    },
    buttonSignin:{
      borderRadius:50,
      width: "30%",
      backgroundColor: "#778899",
      alignItems:"center",
      padding:10,


    },
    textbutton:{
        fontSize:15,
        color:"#FFFFFF",
    },
    remember:{
        fontSize:12,
        padding:10,
        marginTop:10,
    },
    buttonReset:{
        borderRadius:50,
        width: "50%",
        backgroundColor: "#ffffff",
        alignItems:"center",
      },
    textbuttonReset:{
        color:"#00BFFF",
        fontSize:12,
    },
    signup:{
        padding:10,
    }
});


export default styles