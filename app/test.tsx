// app/test.tsx
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Test() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test Page</Text>
      <Button 
        title="Go to Welcome" 
        onPress={() => router.push('/WelcomePage')}
      />
    </View>
  );
}