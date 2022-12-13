import { View, Text, ScrollView, VStack } from 'native-base';
import { Calendar as ReactNativeCalendars, LocaleConfig } from 'react-native-calendars';
import { StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { HandlerStateChangeEvent, PanGestureHandler, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';

import Card from '../Card';
import User from '../User';

export default function Calendar() {

  let cardsContent = [
    {
      id: 1,
      title: 'John Doe',
      start: '13:00',
      end: '14:00',
      status: 'not Started'
    },
    {
      id: 2,
      title: 'John Doe',
      start: '12:00',
      end: '13:00',
      status: 'progress'
    },
    {
      id: 3,
      title: 'John Doe',
      start: '09:00',
      end: '13:00',
      status: 'done'
    }
  ]

  cardsContent.sort((a, b): any => {
    if (a.start < b.start) {
      return -1;
    } else {
      return true;
    }
  })

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

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) {

  }

  if (!fontsLoaded) {
    return <ActivityIndicator />
  } else {
    return (
      <View
        flex={1}
        bgColor={'#292643'}
      >
        <View
          flex={1}
          mt={20}
        >
          <ReactNativeCalendars
            theme={{
              backgroundColor: '#292643',
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
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <ScrollView
              p={3}
              flex={1}
              h={'full'}
              bgColor="white"
              style={{
                borderTopLeftRadius: 37,
                borderTopRightRadius: 37,
                position: 'absolute',
                top: 250,
              }}
            >
              <Text
                color={'#292643'}
                fontFamily="Poppins_600SemiBold"
                fontSize={'3xl'}
                ml={2}
                mt={2}
                mb={5}
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
          </PanGestureHandler>
        </View>
      </View>
    )
  }

}
