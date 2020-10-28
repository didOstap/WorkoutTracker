import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import BlackButton from '../components/BlackButton';
import palette from '../components/styles/palette';
import {
  CONTINUE_WITH_FACEBOOK,
  SIGN_IN_WITH_GOOGLE,
  TRACKER,
  WORKOUT,
} from '../constants/strings';
import { useAuth } from '../context/auth-context';

const SignInScreen = () => {
  const { googleSignIn } = useAuth();
  const signInWithGoogle = useCallback(() => googleSignIn(), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.titleTop]}>{WORKOUT}</Text>
          <Text style={[styles.title, styles.titleBottom]}>{TRACKER}</Text>
        </View>
        <View style={styles.topButton}>
          <BlackButton title={SIGN_IN_WITH_GOOGLE} onPress={signInWithGoogle} />
        </View>
        <View style={styles.button}>
          <BlackButton
            title={CONTINUE_WITH_FACEBOOK}
            onPress={signInWithGoogle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.solid,
  },
  subContainer: {
    marginTop: 90,
    marginHorizontal: 10,
  },
  titleContainer: {
    marginTop: 140,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
  },
  titleTop: {
    fontSize: 26,
  },
  titleBottom: {
    fontSize: 33,
  },
  button: {
    marginTop: 10,
  },
  topButton: {
    marginTop: 250,
  },
});

// <SafeAreaView style={styles.container}>
//   <Formik
//     initialValues={{ login: '', password: '' }}
//     onSubmit={handleLogin}
//     validate={validateLogin}
//   >
//     {({
//         handleChange,
//         handleSubmit,
//         values,
//         errors,
//         touched,
//         setFieldTouched,
//       }) => {
//       const { login, password } = values;
//       return (
//         <View style={styles.subContainer}>
//           <View style={styles.part}>
//             <Text style={styles.text}>{LOGIN.toUpperCase()}</Text>
//             <CustomTextInput
//               value={login}
//               maxLength={50}
//               placeholder={LOGIN}
//               onChangeText={handleChange('login')}
//               onBlur={() => setFieldTouched('login')}
//             />
//             <Text style={styles.error}>
//               {touched.login && errors.login && errors.login}
//             </Text>
//           </View>
//
//           <View style={styles.part}>
//             <Text style={styles.text}>{PASSWORD.toUpperCase()}</Text>
//             <CustomTextInput
//               maxLength={50}
//               secureTextEntry
//               value={password}
//               placeholder={PASSWORD}
//               onChangeText={handleChange('password')}
//               onBlur={() => setFieldTouched('password')}
//             />
//             <Text style={styles.error}>
//               {touched.password && errors.password && errors.password}
//             </Text>
//           </View>
//
//           <Text style={styles.error}>
//             {errors.general && errors.general}
//           </Text>
//
//           <View style={styles.part}>
//             <BlackButton title={LOGIN.toUpperCase()} onPress={handleSubmit} />
//           </View>
//         </View>
//       );
//     }}
//   </Formik>
//
//   <View>
//     <TouchableOpacity style={styles.bottom} onPress={navToRegisterScreen}>
//       <Text style={styles.bottomText}>
//         {NEW_TO_WORKOUT_TRACKER}
//         <Text style={styles.redText}>{REGISTER}</Text>
//       </Text>
//     </TouchableOpacity>
//   </View>
// </SafeAreaView>
