import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import AppInput from '../components/AppInput';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onForgot: () => void;
  onLogin: (phone: string) => void;
  onRegister: () => void;
};

export default function Login({ onBack, onForgot, onLogin, onRegister }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout
      onBack={onBack}
      title="Привет, с возвращением!"
      subtitle="Войдите в свой аккаунт."
    >
      <AppInput
        icon="call"
        value={phone}
        onChangeText={setPhone}
        placeholder="Номер телефона"
        keyboardType="phone-pad"
      />
      <AppInput
        icon="lock-closed"
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secure
      />

      <Pressable onPress={onForgot}>
        <Text style={styles.forget}>Забыл пароль?</Text>
      </Pressable>

      <PrimaryButton title="Войти" onPress={() => onLogin(phone)} />

      <View style={styles.bottom}>
        <Text style={styles.gray}>У вас нет аккаунта?</Text>
        <Pressable onPress={onRegister}>
          <Text style={styles.link}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  forget: {
    color: colors.primary,
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 30,
  },
  bottom: { alignItems: 'center', marginTop: 24 },
  gray: { color: colors.gray, fontSize: 14 },
  link: { color: colors.primary, fontSize: 14, fontWeight: '600', marginTop: 2 },
});