import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomBar from '../components/BottomBar';
import { venues } from '../data/venues';
import { Venue } from '../types';
import { colors } from '../theme';

const categories = ['Все', 'Кафе', 'Спа', 'Отдых'];

type Props = {
  city: string;
  onOpenVenue: (venue: Venue) => void;
  onProfile: () => void;
};

export default function Home({ city, onOpenVenue, onProfile }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Все');

  const filtered = venues.filter(
    (v) =>
      (category === 'Все' || v.category === category) &&
      v.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.content}>
        <Text style={styles.title}>Заведения</Text>
        <Text style={styles.subtitle}>{city || 'Выберите город'}</Text>

        <View style={styles.search}>
          <Ionicons name="search" size={20} color={colors.gray} />
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Поиск"
            placeholderTextColor={colors.gray}
          />
        </View>

        <View style={styles.chips}>
          {categories.map((c) => (
            <Pressable
              key={c}
              style={[styles.chip, category === c && styles.chipActive]}
              onPress={() => setCategory(c)}
            >
              <Text style={[styles.chipText, category === c && styles.chipTextActive]}>
                {c}
              </Text>
            </Pressable>
          ))}
        </View>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={styles.empty}>Ничего не найдено</Text>}
          renderItem={({ item }) => (
            <Pressable style={styles.card} onPress={() => onOpenVenue(item)}>
              <View style={styles.cardIcon}>
                <Ionicons name="storefront" size={26} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSub}>
                  {item.category} • {item.address}
                </Text>
              </View>
              <View style={styles.rating}>
                <Ionicons name="star" size={14} color="#FFB800" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>

      <BottomBar active="home" onHome={() => {}} onProfile={onProfile} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1, paddingHorizontal: 28, paddingTop: 20 },
  title: { fontSize: 27, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 16, color: colors.gray, marginBottom: 18 },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.inputBg,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: colors.text },
  chips: { flexDirection: 'row', marginBottom: 16 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.inputBg,
    marginRight: 8,
  },
  chipActive: { backgroundColor: colors.primary },
  chipText: { color: colors.text, fontSize: 14 },
  chipTextActive: { color: colors.white },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },
  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardTitle: { fontSize: 17, fontWeight: '600', color: colors.text },
  cardSub: { fontSize: 13, color: colors.gray, marginTop: 2 },
  rating: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { marginLeft: 4, fontWeight: '600', color: colors.text },
  empty: { textAlign: 'center', color: colors.gray, marginTop: 30 },
});