import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <View className="my-2">
        <Text className="text-lg font-bold mb-2">Email Or UserName</Text>
        <TextInput
          className="border border-gray-300 rounded-xl py-3 px-4"
          placeholder="Enter email or username"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email input"
        />
      </View>
      <View className="my-2">
        <Text className="text-lg font-bold mb-2">Password</Text>
        <View className="flex-row items-center border border-gray-300 rounded-xl py-2 px-4">
          <TextInput
            className="flex-1 border-0"
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            accessibilityLabel="Password input"
          />
          {showPassword ? (
            <Eye size={20} onPress={togglePasswordVisibility} />
          ) : (
            <EyeClosed size={20} onPress={togglePasswordVisibility} />
          )}
        </View>
      </View>
      <View className="w-1/2 self-center mt-10">
        <Pressable
          onPress={handleLogin}
          className="bg-black rounded-xl py-3 items-center"
        >
          <Text className="text-white text-lg font-bold">Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
