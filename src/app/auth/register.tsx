import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!email || !username || !password || !confirmPassword) {
      alert("All fields are required");
      console.error("All fields are required");
      return;
    }
    console.log(
      "Email:",
      email,
      "Username:",
      username,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword
    );
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <View className="my-2">
        <Text className="text-lg font-bold mb-2">Email</Text>
        <TextInput
          className="border border-gray-300 rounded-xl py-3 px-4"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email input"
        />
      </View>
      <View className="my-2">
        <Text className="text-lg font-bold mb-2">Username</Text>
        <TextInput
          className="border border-gray-300 rounded-xl py-3 px-4"
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          accessibilityLabel="Username input"
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
      <View className="my-2">
        <Text className="text-lg font-bold mb-2">Confirm Password</Text>
        <View className="flex-row items-center border border-gray-300 rounded-xl py-2 px-4">
          <TextInput
            className="flex-1 border-0"
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            accessibilityLabel="Confirm password input"
          />
          {showConfirmPassword ? (
            <Eye size={20} onPress={toggleConfirmPasswordVisibility} />
          ) : (
            <EyeClosed size={20} onPress={toggleConfirmPasswordVisibility} />
          )}
        </View>
      </View>
      <View className="w-1/2 self-center mt-10">
        <Pressable
          onPress={handleRegister}
          className="bg-black rounded-xl py-3 items-center"
        >
          <Text className="text-white text-lg font-bold">Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
