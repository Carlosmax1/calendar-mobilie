import { View, Text, ScrollView, VStack, Radio } from 'native-base';
import { Calendar as ReactNativeCalendars, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import Card from '../Card';

export default function Calendar() {

  const cardsContent = [
    {
      id: 1,
      title: 'John Doe',
      start: '08:00',
      end: '12:00',
      status: 'done'
    },
    {
      id: 2,
      title: 'John Doe',
      start: '08:00',
      end: '12:00',
      status: 'progress'
    },
    {
      id: 3,
      title: 'John Doe',
      start: '08:00',
      end: '12:00',
      status: 'notStarted'
    }
  ]

  LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agosto', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo',],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab'],
    today: 'Hoje'
  };
  LocaleConfig.defaultLocale = 'br';

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  } else {
    return (
      <View
        flex={1}
        bgColor={'#242424'}
      >
        <View
          flex={1}
          mt={20}
        >
          <ReactNativeCalendars
            theme={{
              backgroundColor: '#111',
              calendarBackground: 'transparent',
            }}
            dayComponent={
              ({ date, state }) => {
                return (
                  <View p={3}>
                    {state === 'disabled' && <Text fontFamily="Poppins_600SemiBold" color={'gray.700'}>{date.day}</Text>}
                    {state === 'selected' && <Text fontFamily="Poppins_600SemiBold" color={'cyan.400'}>{date.day}</Text>}
                    {state === '' && <Text fontFamily="Poppins_600SemiBold" color={'gray.100'}>{date.day}</Text>}
                  </View>
                )
              }
            }
            firstDay={1}
            hideArrows
            headerStyle={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 5,
              borderColor: "#d3d3d3"
            }}
            customHeaderTitle={
              <View flex={1} my={4}>
                <Text color={'gray.100'} fontFamily="Poppins_700Bold" fontSize={'2xl'}>Dezembro 2022</Text>
              </View>
            }
          />
          <ScrollView
            p={3}
            flex={1}
            h={'full'}
            bgColor="#d9d9d9"
            style={{
              borderTopLeftRadius: 37,
              borderTopRightRadius: 37
            }}
          >
            <Text
              color={'#242424'}
              fontFamily="Poppins_600SemiBold"
              fontSize={'3xl'}
              ml={2}
              mt={2}
            >
              Hoje
            </Text>
            <VStack>
              {cardsContent.map(item => (
                <Card 
                  key={item.id}
                  title={item.title}
                  end={item.end}
                  start={item.start}
                  id={item.id}
                  status={item.status}
                />
              ))}
            </VStack>
          </ScrollView>
        </View>
      </View>
    )
  }

}
