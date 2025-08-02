import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          headerShown: false,
          tabBarIcon: (focused) => (
            <AntDesign
              name="login"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          headerShown: false,
          tabBarIcon: (focused) => (
            <AntDesign
              name="logout"
              size={24}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
