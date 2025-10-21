import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/BackgroundScreen.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header / Logo */}
          <View style={styles.header}>
            <Image
              source={require('../assets/Logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Content */}
          <View style={styles.content}>
            <Text style={styles.title}>Patient Login</Text>
            <Text style={styles.subtitle}>
              Access your doctor appointments, manage your health records, and
              consult doctors online quickly and securely.
            </Text>

            <TextInput
              placeholder="Enter Mobile Number"
              placeholderTextColor="#444"
              keyboardType="phone-pad"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot OTP?</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  header: {
    alignItems: 'center',
    paddingTop: height * 0.08, // logo top padding
  },
  content: {
    flex: 1,
    justifyContent: 'center', // center vertically
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.5,
    height: height * 0.15,
  },
  title: {
    fontSize: width * 0.08,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#000',
    fontSize: width * 0.035,
    fontWeight: '500',
    marginBottom: height * 0.03,
    textAlign: 'center',
    width: '85%',
  },
  input: {
    width: '90%',
    borderColor: '#e4e2e2ff',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 15,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '90%',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '600',
  },
  forgotButton: {
    marginTop: 5,
  },
  forgotText: {
    color: '#4CAF50',
    fontSize: width * 0.035,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
