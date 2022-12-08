import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { NativeBaseProvider } from 'native-base';

export function Routes() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}