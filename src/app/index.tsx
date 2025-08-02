// @ts-ignore
import homeImg from "@/assets/images/home.jpg";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex flex-1 justify-center items-center bg-white p-4">
      <View className="flex justify-center items-center">
        <Image source={homeImg} className="w-96 h-[500px] rounded-2xl" />
      </View>
      <View>
        <Text className="text-center text-2xl font-bold mt-10">
          Welcome to the Home Screen
        </Text>
        <View className="flex flex-row justify-center items-center mt-5 gap-10">
          <Link
            href="/auth/login"
            className="text-black text-center mt-5 border border-black py-3 px-5 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white"
          >
            Go to Login
          </Link>
          <Link
            href="/auth/register"
            className="text-black text-center mt-5 border border-black py-3 px-5 rounded-lg hover:bg-black hover:text-white focus:bg-black focus:text-white "
          >
            Go to Register
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Home;
