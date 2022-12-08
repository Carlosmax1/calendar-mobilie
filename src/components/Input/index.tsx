import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl
} from 'native-base';

type Props = IInputProps & {
  error?: string | null;
}

export default function Input({ error = null, isInvalid, ...rest }: Props) {

  const invalid = !!error || isInvalid

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        bg="white"
        fontSize="md"
        h={16}
        isInvalid={invalid}
        borderWidth="0"
        borderRadius={5}
        shadow={'1'}
        _focus={{
          bg: "white"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}