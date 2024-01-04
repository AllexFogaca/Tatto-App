import React from "react"
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from './style'
import { useNavigation } from '@react-navigation/native';

    

export default function Form({}){
    const navigation = useNavigation();
  
    const handleLogin = () => {
      // Use navigation.navigate para ir para a tela inicial
      navigation.navigate('Home');
    };

    return(
       <View style={styles.boxLogin}>
           <View style={styles.form}>
            <Text style={styles.login}>Login</Text>
            <TextInput
            style={styles.signin}
            placeholder="Email or Phone"
            keyboardType="default"/>
            <Text style={styles.password}>Password</Text>
            <TextInput
            style={styles.signin}
            placeholder="Password"
            keyboardType="default"/>
            <TouchableOpacity 
            onPress={handleLogin}
            style={styles.buttonSignin}
            title="Sign in"
            >
                <Text style={styles.textbutton}>Sign in</Text>
            </TouchableOpacity>
                <Text style={styles.signup}>No have account?</Text>
            <TouchableOpacity
            style={styles.buttonSignin}
            title="Sign up">
                <Text style={styles.textbutton}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.remember}>No remember Password?</Text>
            <TouchableOpacity 
            style={styles.buttonReset}
            
            title="Reset Password">
                <Text style={styles.textbuttonReset}>Reset Password</Text>
            </TouchableOpacity>
            

           </View>
       </View>
    );
}