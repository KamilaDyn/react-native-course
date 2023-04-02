import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, deleteItem, id }) {
  return (
    <Pressable
      android_ripple={{ color: "#003d80" }}
      onPress={deleteItem.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#003d80",
    borderWidth: 1,
    borderColor: "#0062cc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;
