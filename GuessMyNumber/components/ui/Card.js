import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    //for iOS add box shadow
    shadowColor: "black",
    // object with control how much the shadow should be offset from original object which belongs from left to right
    shadowOffset: { width: 0, height: 2 },
    //cantrol how much shadow expands
    shadowRadius: 6,
    // how shadow is transsparent
    shadowOpacity: 0.25,
  },
});
export default Card;
