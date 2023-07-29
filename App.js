import React from "react";
import {
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  return (
    // <SafeAreaView style={styles.main}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <WebView
        style={styles.main}
        source={{ uri: "https://it-support-six.vercel.app/jp" }}
      />
    </ScrollView>
    // {/* </SafeAreaView> */}
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginTop: 30,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
