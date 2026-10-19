import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AuthLayout from '../components/AuthLayout';
import AppInput from '../components/AppInput';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  onBack: () => void;
  onRegister: (name: string, phone: string) => void;
  onLogin: () => void;
};

export default function Register({ onBack, onRegister, onLogin }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleRegister = () => {
    if (!name || !phone || !password) {
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }
    if (!agree) {
      Alert.alert('Ошибка', 'Примите условия использования');
      return;
    }
    onRegister(name, phone);
  };

  return (
    <AuthLayout
      onBack={onBack}
      title="Регистрация"
      subtitle="Создайте учетную запись, чтобы продолжить!"
    >
      <AppInput icon="person" value={name} onChangeText={setName} placeholder="Ваше имя" />
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

      <Pressable style={styles.agreeRow} onPress={() => setAgree(!agree)}>
        <View style={[styles.checkbox, agree && styles.checkboxOn]}>
          {agree && <Ionicons name="checkmark" size={16} color={colors.white} />}
        </View>
        <Text style={styles.agreeText}>
          Создавая учетную запись, вы соглашаетесь с нашими{' '}
          <Text style={styles.link}>Условиями использования.</Text>
        </Text>
      </Pressable>

      <PrimaryButton title="Зарегистрироваться" onPress={handleRegister} />

      <View style={styles.bottom}>
        <Text style={styles.gray}>Уже есть аккаунт? </Text>
        <Pressable onPress={onLogin}>
          <Text style={styles.link}>Войти</Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  agreeRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxOn: { backgroundColor: colors.primary, borderColor: colors.primary },
  agreeText: { flex: 1, fontSize: 13, color: colors.text },
  link: { color: colors.primary, fontWeight: '600' },
  bottom: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  gray: { color: colors.gray, fontSize: 14 },
});