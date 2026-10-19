export type Screen =
  | 'login'
  | 'forgetPassword'
  | 'verifyCode'
  | 'resetPassword'
  | 'register'
  | 'selectCity'
  | 'home'
  | 'venueDetails'
  | 'profile';

export type Venue = {
  id: string;
  name: string;
  category: 'Кафе' | 'Спа' | 'Отдых';
  rating: number;
  address: string;
  description: string;
};