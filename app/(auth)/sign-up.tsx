import { View, Text, Button } from "react-native";
import { router } from "expo-router";
const SignUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Button
        title="Sign In"
        onPress={() => {
          router.push("/sign-in");
        }}
      />
    </View>
  );
};

export default SignUp;
