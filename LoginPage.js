import React, { useState } from 'react';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');

  const handleLogin = () => {
    if (nom && email && password) {
      axios.post('https://localhost:8000/login', { nom: nom, email: email, password: password })
        .then(response => {
          console.log("Connexion réussie: " + email);
          navigation.navigate('main');
        }).catch(error => {
          console.error("Erreur lors de la connexion:", error);
          const errorMsg = error.response?.data?.message || "Une erreur s'est produite";
          alert(errorMsg);
        });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
      <View style={[styles.container, { marginTop: 80 }]}>
        {/* Image supprimée */}
      </View>

      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: '700',
            marginVertical: 70,
            color: 'white',
          }}> CRÉER UN COMPTE</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            backgroundColor="white"
            value={nom}
            onChangeText={text => setNom(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            keyboardType="email-address"
            autoCapitalize="none"
            backgroundColor="white"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            backgroundColor="white"
            placeholder="Entrez votre mot de passe"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
          <Text style={styles.registerText}>S'inscrire</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('sign')}>
          <Text style={styles.loginText}>
            Vous avez déjà un compte? <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '900',
    marginVertical: 8,
    color: 'gray',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 22,
  },
  registerButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },

  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
  },
});

export default LoginPage;
