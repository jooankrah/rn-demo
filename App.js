import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, Pressable, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FontAwesome } from '@expo/vector-icons';
import SocialIcon from './components/SocialIcon';


export default function App() {
  const [email, setEmail] = React.useState('cosmonic@email.com')
  const [password, setPassword] = React.useState('')
  const [showPass, setshowPass] = React.useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleContainer}>
        <FontAwesome name="chevron-left" size={22} color="black" />
        <Text style={styles.title}>Sign in</Text>
      </View>
      <View style={styles.socialIconsContainer}>
        <Text style={{ fontSize: 16, color: 'grey', margin: 10 }}>Sign in with just one step</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SocialIcon Icon={<FontAwesome name="facebook" size={24} color="black" />} />
          <SocialIcon Icon={<FontAwesome name="google" size={24} color="black" />} />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 16, color: 'grey', margin: 10}}>Or login with email</Text>
        <KeyboardAwareScrollView style={{marginBottom:50}}>
          <View style={{backgroundColor:'#f4f0ec', padding:15, borderRadius:10, marginBottom:10, borderWidth:1, borderColor:'#3cb371'}}>
            <Text style={{color:'grey'}}>Email</Text>
            <TextInput defaultValue={email} value={email} placeholder='Enter e-mail address...' keyboardType='email-address' onChangeText={setEmail}/>
          </View>
          <View style={{backgroundColor:'#f4f0ec', padding:15, borderRadius:10, marginBottom:10,}}>
            <Text style={{color:'grey'}}>Password</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <TextInput secureTextEntry= {!showPass} value={password} placeholder='Enter password here...' onChangeText={setPassword} style={{flexGrow: 1}}/>
              {!showPass ? 
              <FontAwesome name="eye" size={24} color="black"  onPress={()=>setshowPass(!showPass)}/> :
              <FontAwesome name="eye-slash" size={24} color="black"  onPress={()=>setshowPass(!showPass)}/>
              }
            </View>
          </View>
        </KeyboardAwareScrollView>
        <Pressable style={styles.loginBtn} onPress={()=>alert(JSON.stringify({email, password}))}>
          <Text style={styles.loginTxt}>Login</Text>
        </Pressable>
        <Text style={{textAlign:'center'}}>Don't have any account? <Text style={{color: '#3cb371'}}>Register</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 15
  },
  titleContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    marginBottom: 20
  },
  loginBtn: {
    padding: 10,
    backgroundColor: '#3cb371',
    borderRadius: 10,
    marginBottom: 10
  },
  loginTxt: {
    color: 'white',
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700'
  }
});
