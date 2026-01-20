import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
const TabsLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const insets = useSafeAreaInsets();
  const isIphoneWithHomeIndicator = insets.bottom > 0;
  const TAB_HEIGHT = isIphoneWithHomeIndicator ? 32 : 64;
  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href={"/(auth)"} />;
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1DB954",
          tabBarInactiveTintColor: "#B3B3B3",
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            elevation: 0,
            borderTopWidth: 0,
            height: TAB_HEIGHT + insets.bottom,
            paddingTop: 4,
            marginHorizontal: 100,
            marginBottom: insets.bottom,
            borderRadius: 24,
            overflow: "hidden",
          },

          tabBarBackground: () =>
            Platform.OS === "android" ? (
              <View
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 70,
                  backgroundColor: "rgba(18,18,18,0.1)"
                }}
              />
            ) : (
              <BlurView
                intensity={80}
                tint="dark"
                style={StyleSheet.absoluteFill}
              />
            ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 600,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="grid"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="cart"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;
