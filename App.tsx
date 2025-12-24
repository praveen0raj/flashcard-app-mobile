import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { PaperProvider, Text, Button } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { lightTheme, darkTheme, validateEnv } from '@config';
import { useEffect } from 'react';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    // Validate environment variables on app start
    validateEnv();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider theme={theme}>
        <View style={[styles.content, { backgroundColor: theme.colors.background }]}>
          <Text variant="headlineLarge" style={{ color: theme.colors.onBackground }}>
            Flashcard App
          </Text>
          <Text variant="bodyLarge" style={{ color: theme.colors.onBackground, marginTop: 16 }}>
            Welcome to your flashcard learning app!
          </Text>
          <Button mode="contained" style={{ marginTop: 24 }}>
            Get Started
          </Button>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </View>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
