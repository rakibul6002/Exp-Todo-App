'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/reduxStore/store';
import { PersistGate } from 'redux-persist/integration/react'

export default function Layout({children}) {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
};
