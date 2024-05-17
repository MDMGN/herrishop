import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  return (
   <View style={{flex:1}}>
      <StatusBar style="auto" />
       <UserProvider>
          <Navigation />
       </UserProvider>
   </View>
  );
}
