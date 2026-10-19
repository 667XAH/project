import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme';

type Props = {
  active: 'home' | 'profile';
  onHome: () => void;
  onProfile: () => void;
};

export default function BottomBar({ active, onHome, onProfile }: Props) {
  return (
    <View style={styles.bar}>
      <Pressable style={styles.item} onPress={onHome}>
        <Ionicons
          name="home"
          size={24}
          color={active === 'home' ? colors.primary : colors.gray}
        />
        <Text style={[styles.label, active === 'home' && styles.active]}>Главная</Text>
      </Pressable>
      <Pressable style={styles.item} onPress={onProfile}>
        <Ionicons
          name="person"
          size={24}
          color={active === 'profile' ? colors.primary : colors.gray}
        />
        <Text style={[styles.label, active === 'profile' && styles.active]}>Профиль</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: 1,
    borderTopColor: colors.inputBg,
    backgroundColor: colors.white,
  },
  item: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 12, color: colors.gray, marginTop: 2 },
  active: { color: colors.primary },
});