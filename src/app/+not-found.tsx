import { Link } from "expo-router";
import { SearchSlash } from "lucide-react-native";
import { Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <View className="flex-1 justify-center items-center bg-white p-4">
        <View className="mb-4">
          <SearchSlash size={50} color="black" />
        </View>
        <Text>This screen does not exist.</Text>
        <Link
          href="/"
          className="text-black border border-black rounded-lg px-4 py-2 mt-4"
        >
          <Text>Go Home!</Text>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
