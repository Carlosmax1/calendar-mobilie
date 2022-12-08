import React from 'react';
import { Text, ITextProps } from 'native-base';
import { useFonts } from 'expo-font';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy';

export default function Logo({ ...rest }: ITextProps) {

  const [fontsLoaded] = useFonts({
    Satisfy_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Text
        fontFamily="Satisfy_400Regular"
        {...rest}
      >
        Calendar
      </Text>
    )
  }

}