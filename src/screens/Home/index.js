import React, { useState, useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { useNameContext } from "../../contexts/NameProvider";
import { styles } from "./styles";

export function Home({ name, setName, setError, error }) {
  const [newName, setNewName] = useState(null);
  const ref = useRef(0);

  function onHandleSaveName() {
    if (newName === null) {
      setError("Please, insert valid name");
    } else {
      setName(newName);
      setNewName(null);
      setError(null);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position">
      {error ? (
        <Text testID="error" style={styles.error}>
          {error}
        </Text>
      ) : (
        <Text testID="text" style={styles.headerText}>
          Welcome, {name || "No Name"}
        </Text>
      )}

      <TextInput
        style={styles.input}
        testID="name"
        label="Name"
        value={newName}
        onChangeText={setNewName}
        placeholder="Please, typing here...."
      />

      <TouchableOpacity
        testID="buttonChange"
        style={styles.button}
        onPress={onHandleSaveName}
      >
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      <Text>Renders: ..{ref.current++}</Text>
    </KeyboardAvoidingView>
  );
}

export default (props) => {
  const { name, setName, saveName, setError, error } = useNameContext();
  return (
    <Home
      name={name}
      setName={setName}
      saveName={saveName}
      setError={setError}
      error={error}
      {...props}
    />
  );
};
