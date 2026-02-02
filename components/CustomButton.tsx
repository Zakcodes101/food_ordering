import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { CustomButtonProps } from "@/type";
import cn from "clsx";

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <Text className={cn("text-white-100 paragraph-semibold")}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
