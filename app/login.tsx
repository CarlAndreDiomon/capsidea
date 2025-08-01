import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-5">Login Page</Text>
      <Pressable
        className="p-2.5 bg-green-300"
        onPress={() => router.push('/home')}
      >
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}
