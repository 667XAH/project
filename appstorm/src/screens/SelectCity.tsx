import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AuthLayout from '../components/AuthLayout';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

const cities = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актау'];

type Props = {
  onBack: () => void;
  onContinue: (city: string) => void;
};

export default function SelectCity({ onBack, onContinue }: Props) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState('');

  return (
    <AuthLayout
      onBack={onBack}
      title="Выберите город"
      subtitle="Заведения которые будут показываться вам, будут зависеть от вашего города."
    >
      <Pressable style={styles.select} onPress={() => setOpen(!open)}>
        <Text style={[styles.selectText, !city && { color: colors.gray }]}>
          {city || 'Выбрать город'}
        </Text>
        <Ionicons
          name={open ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={colors.primary}
        />
      </Pressable>

      {open && (
        <View style={styles.list}>
          {cities.map((c) => (
            <Pressable
              key={c}
              style={styles.item}
              onPress={() => {
                setCity(c);
                setOpen(false);
              }}
            >
              <Text style={styles.itemText}>{c}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <PrimaryButton
        title="Продолжить"
        onPress={() => onContinue(city)}
        disabled={!city}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  select: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.inputBg,
    borderRadius: 18,
    paddingHorizontal: 18,
  },
  selectText: { fontSize: 18, color: colors.text },
  list: {
    backgroundColor: colors.inputBg,
    borderRadius: 18,
    marginTop: 8,
    marginBottom: 14,
  },
  item: { paddingVertical: 14, paddingHorizontal: 18 },
  itemText: { fontSize: 16, color: colors.text },
});