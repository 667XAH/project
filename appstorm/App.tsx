import React, { useState } from 'react';
import { Screen, Venue } from './src/types';

import Login from './src/screens/Login';
import ForgetPassword from './src/screens/ForgetPassword';
import VerifyCode from './src/screens/VerifyCode';
import ResetPassword from './src/screens/ResetPassword';
import Register from './src/screens/Register';
import SelectCity from './src/screens/SelectCity';
import Home from './src/screens/Home';
import VenueDetails from './src/screens/VenueDetails';
import Profile from './src/screens/Profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [venue, setVenue] = useState<Venue | null>(null);

  switch (screen) {
    case 'login':
      return (
        <Login
          onBack={() => console.log('Назад')}
          onForgot={() => setScreen('forgetPassword')}
          onLogin={(p) => {
            setPhone(p);
            setScreen('home');
          }}
          onRegister={() => setScreen('register')}
        />
      );

    case 'forgetPassword':
      return (
        <ForgetPassword
          onBack={() => setScreen('login')}
          onContinue={(p) => {
            setPhone(p);
            setScreen('verifyCode');
          }}
        />
      );

    case 'verifyCode':
      return (
        <VerifyCode
          phone={phone}
          onBack={() => setScreen('forgetPassword')}
          onContinue={() => setScreen('resetPassword')}
        />
      );

    case 'resetPassword':
      return (
        <ResetPassword
          onBack={() => setScreen('verifyCode')}
          onContinue={() => setScreen('login')}
        />
      );

    case 'register':
      return (
        <Register
          onBack={() => setScreen('login')}
          onLogin={() => setScreen('login')}
          onRegister={(n, p) => {
            setName(n);
            setPhone(p);
            setScreen('selectCity');
          }}
        />
      );

    case 'selectCity':
      return (
        <SelectCity
          onBack={() => setScreen('register')}
          onContinue={(c) => {
            setCity(c);
            setScreen('home');
          }}
        />
      );

    case 'home':
      return (
        <Home
          city={city}
          onOpenVenue={(v) => {
            setVenue(v);
            setScreen('venueDetails');
          }}
          onProfile={() => setScreen('profile')}
        />
      );

    case 'venueDetails':
      return venue ? (
        <VenueDetails venue={venue} onBack={() => setScreen('home')} />
      ) : null;

    case 'profile':
      return (
        <Profile
          name={name}
          phone={phone}
          city={city}
          onHome={() => setScreen('home')}
          onChangeCity={() => setScreen('selectCity')}
          onLogout={() => setScreen('login')}
        />
      );

    default:
      return null;
  }
}