import React, { ReactNode } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme';

type Props = {
  onBack?: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function AuthLayout({ onBack, title, subtitle, children }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {onBack ? (
          <Pressable style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back" size={28} color={colors.text} />
          </Pressable>
        ) : (
          <View style={styles.backButton} />
        )}

        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.white },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 10,
    paddingBottom: 30,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: colors.gray,
    fontSize: 18,
    marginTop: 3,
    marginBottom: 29,
  },
});