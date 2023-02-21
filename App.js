import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// import firebase from '@react-native-firebase/app';
// import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const App = () => {
  useEffect(() => {
    dataBase();
  }, [])

  const dataBase = async () => {
    try {

      const data = await firestore().collection('testing').doc("rM9J19WxR1lbFF2EEYtE").get();
      console.log(data)
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const userCreate = await auth().createUserWithEmailAndPassword(email, password);

  //     console.log(email , password)
  //     console.log(userCreate)


  //   } catch (err) {
  //     console.log(err)

  //   }
  // }

  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <TextInput
  //       style={style.input}
  //       placeholder="Enter email"
  //       value={email}
  //       onChangeText={value => setEmail(value)} />
  //     <TextInput
  //       style={style.input}
  //       placeholder="Enter Password"
  //       value={password}
  //       onChangeText={value => setPassword(value)}
  //       secureTextEntry={true} />

  //     {/* buuton-------*/}

  //     <TouchableOpacity onPress={() => handleLogin()} style={style.btn}>
  //       <Text>sign in</Text>
  //     </TouchableOpacity>

  //     {/* <Text>{message}</Text> */}
  //   </View>
  // )
};

const { width, height } = Dimensions.get('screen')
const style = StyleSheet.create({
  // input: {
  //   width: width - 10,
  //   borderWidth: 2,
  //   borderRadius: 20,
  //   margin: 5,
  //   padding: 15,
  // },
  // btn: {
  //   width: width - 10,
  //   borderWidth: 2,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   padding: 15,
  //   backgroundColor: 'gray'




  // }
});

export default App;