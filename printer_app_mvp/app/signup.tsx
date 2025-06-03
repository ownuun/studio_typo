import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert('회원가입 성공!');
      router.replace('/'); // 가입 후 홈으로 이동
    } catch (error: any) {
      alert('회원가입 실패: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이메일</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} />
        )}
      />

      <Text style={styles.label}>비밀번호</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />

      <Button title="회원가입" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 12, fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginTop: 4,
  },
});
