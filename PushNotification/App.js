import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import * as Notification from "expo-notifications";
import { useEffect } from "react";

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    async function configurePushNotification() {
      const { status } = await Notification.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notification.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required",
          "Push notification need the appropriate permission"
        );
        return;
      }

      const pushTokenData = await Notification.getExpoPushTokenAsync();
      console.log(pushTokenData);
      if (Platform.OS === "android") {
        Notification.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notification.AndroidImportance.DEFAULT,
        });
      }
    }
    configurePushNotification();
  }, []);

  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
        const userName = notification.request.content.data.userName;
      }
    ); // register notification which will be executed in device

    const subscription2 = Notification.addNotificationResponseReceivedListener(
      (response) => {
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
      }
    ); //response to notification  by click on it
    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);
  function scheduleNotificationHandler() {
    Notification.scheduleNotificationAsync({
      content: {
        title: "My first notification",
        body: "This is the body of notification",
        data: { userName: "Kamila" },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  function sendPushNotificationHandler() {
    // https://docs.expo.dev/push-notifications/sending-notifications/#http2-api
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
        title: "Test - sent from device",
        body: "This is  test",
      }),
    });
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={scheduleNotificationHandler}
        title="Schedule notification"
      />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Send push notification"
          onPress={sendPushNotificationHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
