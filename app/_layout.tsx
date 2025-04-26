import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
export default function RootLayout() {
  return(
      <Provider store={store}>
        <PaperProvider >
            
            <Stack >
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }}/>
            </Stack>
        </PaperProvider>
        </Provider>
  )};
