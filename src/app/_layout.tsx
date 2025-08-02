import { Stack } from "expo-router";
import React from "react";
import "../../global.css";

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default TabLayout;
