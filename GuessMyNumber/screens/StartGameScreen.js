import { TextInput, View } from "react-native";
import { PrimaryButton } from "../components";
function StartGameScreen() {
  return (
    <View>
      <TextInput placeholder="Start game" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
      {/* buttons */}
    </View>
  );
}

export default StartGameScreen;
