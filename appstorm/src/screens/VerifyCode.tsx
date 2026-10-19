import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  phone: string;
  onBack: () => void;
  onContinue: () => void;
};

export default function VerifyCode({ phone, onBack, onContinue }: Props) {
  const [code, setCode] = useState(['', '', '', '']);
  const refs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/\D/g, '').slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    if (digit && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout
      onBack={onBack}
      title="Подтвердить номер"
      subtitle={`Мы только что отправили код на ${phone || '+7 (700) 555 77 55'}`}
    >
      <View style={styles.row}>
        {code.map((digit, i) => (
          <TextInput
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            style={styles.box}
            value={digit}
            onChangeText={(t) => handleChange(t, i)}
            onKeyPress={(e) => handleKeyPress(e.nativeEvent.key, i)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <PrimaryButton
        title="Продолжить"
        onPress={onContinue}
        disabled={code.some((d) => d === '')}
      />

      <Pressable onPress={() => console.log('Код отправлен повторно')}>
        <Text style={styles.resend}>Отправить код еще раз</Text>
      </Pressable>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  box: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.inputBg,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  resend: {
    color: colors.gray,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
});