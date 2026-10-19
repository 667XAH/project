import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import AppInput from '../components/AppInput';
import PrimaryButton from '../components/PrimaryButton';

type Props = {
  onBack: () => void;
  onContinue: (phone: string) => void;
};

export default function ForgetPassword({ onBack, onContinue }: Props) {
  const [phone, setPhone] = useState('');

  return (
    <AuthLayout
      onBack={onBack}
      title="Восстановление пароля"
      subtitle="Введите свой номер телефона, чтобы восстановить пароль"
    >
      <AppInput
        icon="call"
        value={phone}
        onChangeText={setPhone}
        placeholder="+7 (700) 555 77 55"
        keyboardType="phone-pad"
      />
      <PrimaryButton title="Продолжить" onPress={() => onContinue(phone)} />
    </AuthLayout>
  );
}