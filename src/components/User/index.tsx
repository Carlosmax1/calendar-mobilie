import { VStack, View, Center } from 'native-base';

export default function User() {
  return (
    <VStack
      p={2}
      top={0}
      right={'2'}
      style={{
        marginTop: 34,
        position: 'absolute',
        zIndex: 10,
        height: 100
      }}
      w={'16'}
      bgColor={'#39355c6a'}
      roundedBottomLeft={'full'}
      roundedBottomRight={'full'}
    >
      <View
        bgColor={'white'}
        bottom={0}
        style={{
          position: 'absolute',
          borderRadius: 100,
          width: 55,
          height: 55,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        ml={1}
        mb={1}
      />
    </VStack>
  )
}