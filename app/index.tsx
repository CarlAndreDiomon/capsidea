import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function LandingPage() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-5">Landing Page</Text>
      <Link href="/login" asChild>
        <Pressable className="p-2.5 bg-blue-300">
          <Text>Go to Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
