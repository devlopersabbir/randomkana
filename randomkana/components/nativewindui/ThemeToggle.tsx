import { cn } from "@/lib/cn";
import { useColorScheme } from "@/lib/hooks/useColorScheme";
import { COLORS } from "@/theme/colors";
import { Icon } from "@roninoss/icons";
import { Pressable, View } from "react-native";
import Animated, {
  LayoutAnimationConfig,
  ZoomInRotate,
} from "react-native-reanimated";

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <LayoutAnimationConfig skipEntering>
      <Animated.View
        className="items-center justify-center"
        key={"toggle-" + colorScheme}
        entering={ZoomInRotate}
      >
        <Pressable
          onPress={() => {
            setColorScheme(colorScheme === "dark" ? "light" : "dark");
          }}
          className="opacity-80"
        >
          {colorScheme === "dark"
            ? ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Icon
                    namingScheme="sfSymbol"
                    name="moon.stars"
                    color={COLORS.white}
                  />
                </View>
              )
            : ({ pressed }) => (
                <View className={cn("px-0.5", pressed && "opacity-50")}>
                  <Icon
                    namingScheme="sfSymbol"
                    name="sun.min"
                    color={COLORS.black}
                  />
                </View>
              )}
        </Pressable>
      </Animated.View>
    </LayoutAnimationConfig>
  );
}
