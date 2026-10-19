import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomBar from '../components/BottomBar';
import PrimaryButton from '../components/PrimaryButton';
import { colors } from '../theme';

type Props = {
  name: string;
  phone: string;
  city: string;
  onHome: () => void;
  onChangeCity: () => void;
  onLogout: () => void;
};

export default function Profile({
  name,
  phone,
  city,
  onHome,
  onChangeCity,
  onLogout,
}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{(name || 'U')[0].toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{name || 'Пользователь'}</Text>
        <Text style={styles.phone}>{phone || 'Номер не указан'}</Text>

        <Pressable style={styles.item} onPress={onChangeCity}>
          <Ionicons name="location" size={22} color={colors.primary} />
          <Text style={styles.itemText}>Город: {city || 'не выбран'}</Text>
          <Ionicons name="chevron-forward" size={20} color={colors.gray} />
        </Pressable>

        <PrimaryButton title="Выйти" onPress={onLogout} />
      </View>

      <BottomBar active="profile" onHome={onHome} onProfile={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 40, alignItems: 'center' },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: { color: colors.white, fontSize: 40, fontWeight: '700' },
  name: { fontSize: 22, fontWeight: '700', color: colors.text },
  phone: { fontSize: 16, color: colors.gray, marginBottom: 30 },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  itemText: { flex: 1, marginLeft: 12, fontSize: 16, color: colors.text },
});