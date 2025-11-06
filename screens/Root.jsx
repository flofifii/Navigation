import { StyleSheet, Text, View } from 'react-native';

export default function RootNavigator() {
  return (
    <View style={styles.container}>
      <Text>RootNavigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5', // violet clair pour changer un peu
    alignItems: 'center',
    justifyContent: 'center',
  },
});
