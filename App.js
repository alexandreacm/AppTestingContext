import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import NameProvider from "./src/contexts/NameProvider";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NameProvider>
        <Home />
      </NameProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
