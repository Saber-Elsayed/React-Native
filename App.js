import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  let [name, setName] = useState("Saber Elsayed");
  const handleClick = () => {
    setName("Ahmed");
  };
  return (
    <ScrollView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Text style={styles.title}>Hii {name}</Text>
      <Button title="click me!" onPress={handleClick} />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    backgroundColor: "#fff",
  },
});
