import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { getPersistor } from './store';
import RootStack from 'src/navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';

const persistor = getPersistor();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </PersistGate>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
