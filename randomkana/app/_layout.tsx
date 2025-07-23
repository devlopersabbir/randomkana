import "../styles/global.css";
import "expo-dev-client";
import { Stack } from "expo-router";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import {
  useColorScheme,
  useInitialAndroidBarSync,
} from "@/lib/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { NAV_THEME } from "@/theme";

export default function RootLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  return (
    <Fragment>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />
      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
            freezeOnBlur: true,
          }}
        />
      </NavThemeProvider>
    </Fragment>
  );
}
