import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export default function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h="16"
      _pressed={{
        bg: '#242424'
      }}
      {...rest}
    >
      <Text color="gray.100" fontSize="md">{title}</Text>
    </NativeBaseButton>
  )
}