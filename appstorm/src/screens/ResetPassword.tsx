import React, { useState } from 'react';
import { Alert } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import AppInput from '../components/AppInput';
import PrimaryButton from '../components/PrimaryButton';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function ResetPassword({ onBack, onContinue }: Props) {
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  const handleContinue = () => {
    if (password.length < 8) {
      Alert.alert('Ошибка', 'Пароль должен быть не менее 8 символов');
      return;
    }
    if (password !== repeat) {
      Alert.alert('Ошибка', 'Пароли не совпадают');
      return;
    }
    onContinue();
  };

  return (
    <AuthLayout
      onBack={onBack}
      title="Сбросить пароль"
      subtitle="Не менее 8 символов, с прописными и строчными буквами"
    >
      <AppInput
        icon="lock-closed"
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secure
      />
      <AppInput
        icon="lock-closed"
        value={repeat}
        onChangeText={setRepeat}
        placeholder="Повторить пароль"
        secure
      />
      <PrimaryButton title="Продолжить" onPress={handleContinue} />
    </AuthLayout>
  );
}