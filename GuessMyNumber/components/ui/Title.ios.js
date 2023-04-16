import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    borderColor: Colors.secondary500,
    borderWidth: 2,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
