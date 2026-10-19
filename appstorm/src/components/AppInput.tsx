import React, { useState } from 'react';
import { KeyboardTypeOptions, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secure?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export default function AppInput({
  icon,
  value,
  onChangeText,
  placeholder,
  secure = false,
  keyboardType = 'default',
}: Props) {
  const [hidden, setHidden] = useState(secure);

  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={22} color={colors.gray} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        secureTextEntry={hidden}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
      {secure && (
        <Pressable onPress={() => setHidden(!hidden)}>
          <Ionicons
            name={hidden ? 'eye-off' : 'eye'}
            size={22}
            color={colors.primary}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  icon: { marginRight: 14 },
  input: { flex: 1, height: '100%', color: colors.text, fontSize: 18 },
});