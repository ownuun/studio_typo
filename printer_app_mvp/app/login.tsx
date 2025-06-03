import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'expo-router'; // ✅ 이건 이미 잘 되어 있음

export default function SignInScreen() {
  const { control, handleSubmit } = useForm();
  const router = useRouter(); // ✅ 여기 추가

  const onSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert('로그인 성공!');
      router.replace('/'); // ✅ 로그인 성공 시 홈으로 이동
    } catch (error: any) {
      alert('로그인 실패: ' + error.message);
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

      <Button title="로그인" onPress={handleSubmit(onSubmit)} />
      <Button title="회원가입 하러가기" onPress={() => router.push('/signup')} />
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
