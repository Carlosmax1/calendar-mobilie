import { VStack, Center, Text } from "native-base";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_200ExtraLight_Italic
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignIn() {

  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_200ExtraLight_Italic
  });

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <VStack flex={1} bgColor="white">
        <Center mt={20} >
          <Logo
            fontSize={45}
          />
        </Center>
        <VStack   
          mt={55} 
          flex={1} 
          bgColor="gray.100" 
          borderTopLeftRadius={50}
          borderTopRightRadius={50} 
          p={10}
        >
          <Center>
            <Text
              fontFamily="Poppins_500Medium"
              fontSize={27}
              m={5}
            >
              Login
            </Text>
            <Input
              placeholder="Email"
              fontFamily={"Poppins_400Regular"}
              keyboardType="email-address"
              mt={16}
            />
            <Input
              placeholder="Password"
              fontFamily={"Poppins_400Regular"}
              secureTextEntry
            />
            <Button
              fontFamily="Poppins_400Regular"
              bg={"#292643"}
              title="Login"
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
              borderBottomRightRadius={20}
              onPress={() => nav.navigate('DashBoard')}
            />
            <TouchableOpacity
              onPress={() => {
                nav.navigate('SignUp')
              }}
            >
              <Text
                mt={40}
                fontFamily="Poppins_500Medium"
              >
                Criar uma nova conta
              </Text>
            </TouchableOpacity>
          </Center>
        </VStack>
      </VStack>
    )
  }

}