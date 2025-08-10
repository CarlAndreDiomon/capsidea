import { View, Text, Pressable, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();

  return (
    // Set up Initial Login Page
    <View className=" flex-1 justify-center items-center">

      <View className=' h-80  flex justify-between'>
        <View className=' flex justify-between h-32'>
        <TextInput 
          placeholder='Enter Username'
          className='w-80 pl-10 border-2 border-blue-500 rounded-full'
        />
        <TextInput 
          placeholder='Enter Password'
          className='w-80 pl-10 border-2 border-blue-500 rounded-full'
        />
        </View>

        <Link href="/login" asChild>
          <Pressable className=" w-80 h-14 p-2.5 bg-blue-500 flex items-center justify-center rounded-xl border-b-black border-b-2">
            <Text className=' font-bold text-2xl text-white '>CONTINUE</Text>
          </Pressable>
        </Link>      

      </View>

    </View>
  );
}
