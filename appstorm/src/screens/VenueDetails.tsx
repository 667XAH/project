import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AuthLayout from '../components/AuthLayout';
import PrimaryButton from '../components/PrimaryButton';
import { Venue } from '../types';
import { colors } from '../theme';

type Props = {
  venue: Venue;
  onBack: () => void;
};

export default function VenueDetails({ venue, onBack }: Props) {
  return (
    <AuthLayout onBack={onBack} title={venue.name} subtitle={venue.category}>
      <View style={styles.banner}>
        <Ionicons name="image" size={48} color={colors.primary} />
      </View>

      <View style={styles.row}>
        <Ionicons name="star" size={18} color="#FFB800" />
        <Text style={styles.rowText}>{venue.rating}</Text>
      </View>
      <View style={styles.row}>
        <Ionicons name="location" size={18} color={colors.primary} />
        <Text style={styles.rowText}>{venue.address}</Text>
      </View>

      <Text style={styles.description}>{venue.description}</Text>

      <PrimaryButton
        title="Забронировать"
        onPress={() => Alert.alert('Готово', `Заявка в «${venue.name}» отправлена`)}
      />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 180,
    borderRadius: 20,
    backgroundColor: colors.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  rowText: { marginLeft: 8, fontSize: 16, color: colors.text },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray,
    marginTop: 8,
    marginBottom: 20,
  },
});