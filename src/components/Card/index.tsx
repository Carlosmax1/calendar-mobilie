import { Box, VStack, Text, HStack } from "native-base";
import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import Circle from "../Circle";

type CardProps = {
  id: string | number;
  title: string;
  start: string,
  end: string;
  status: string;
}

export default function Card(
  { id, title, start, end, status }: CardProps
) {

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  } else {
    return (
      <VStack flex={1} flexDirection={'row'}>
        <VStack
        >
          <Circle
            status="done"
          />
          <VStack
            height={90}
            borderLeftWidth={2}
            ml={2.5}
            mt={1}
            borderColor={'red.300'}
          />

        </VStack>
        <Box
          mt={2}
          height={90}
          w={"full"}
          //bgColor={'amber.100'}
          ml={3}
          p={2}
        >
          <HStack
            justifyContent={"space-between"}
          >
            <VStack
            >
              <Text
                color="#292643"
                fontFamily="Poppins_600SemiBold"
                fontSize={"xl"}
              >
                {title}
              </Text>
              <Text
                color="#d3d3d3"
                fontFamily="Poppins_300Light"
              >
                {start} - {end}
              </Text>
            </VStack>
            <Text
              textTransform="capitalize"
              fontFamily={"Poppins_500Medium"}
              mr={"10"}
              fontSize={"md"}
              bg={
                status === 'done' && "amber.200" ||
                status === 'progress' && "red.200" ||
                status === 'not Started' && 'blue.200'
              }
              width={120}
              height={10}
              rounded={"full"}
              textAlign="center"
              p={2}
              color="white"
            >
              {status}
            </Text>
          </HStack>
        </Box>
      </VStack>
    )
  }
}