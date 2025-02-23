import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MainPage() {
  const navigation = useNavigation();

  const handleButtonClick = (name) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.Background}>
      <Text style={styles.heading}>SERVICES</Text>

      <View style={styles.navContainer}>
        <View style={styles.navList}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleButtonClick('main')}>
            <Ionicons name="home" size={24} color="black" />
            <Text style={styles.buttonText}>Accueil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => handleButtonClick('Create')}>
            <Ionicons name="add-circle-outline" size={25} color="black" />
            <Text style={styles.buttonText}>Créer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem} onPress={() => handleButtonClick('Profile')}>
            <Ionicons name="person" size={24} color="black" />
            <Text style={styles.buttonText}>Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '900',
  },

  Background: {
    flex: 1,
    backgroundColor: 'gray',
  },
  heading: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 100,
    color: 'white',
  },
  navContainer: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 60,
  },
  navList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default MainPage;
