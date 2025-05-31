import { Text, View, StyleSheet  } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-2xl font-bold">
        Tailwind fonctionne !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
