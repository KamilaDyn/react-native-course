import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText} s>
        Opponent's Guess: {guess}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary500,
    flexDirection: "flex",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    showOffset: { width: 0, height: 0 },
    showOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessLogItem;
