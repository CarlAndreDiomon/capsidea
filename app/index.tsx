import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function LandingPage() {
  return (
    // Simple Landing page set-up with app name and button to continue to login page
    <View className="pb-5 flex-1 justify-between items-center">

      <View className='w-full h-20 bg-blue-500 flex items-center justify-center rounded-b-3xl '>
        <Text className=' text-6xl text-white '>Welcome</Text>
      </View>

      <Text className="text-5xl font-bold mb-5">tur
        <Text className=' text-yellow-500 '>U</Text>
        n
        <Text className=' text-red-600 '>A</Text>
        n
      </Text>
      
      <Link href="/login" asChild>
        <Pressable className=" w-80 h-14 p-2.5 bg-blue-500 flex items-center justify-center rounded-xl border-b-black border-b-2">
          <Text className=' font-bold text-2xl text-white '>CONTINUE</Text>
        </Pressable>
      </Link>
    </View>
  );
}
