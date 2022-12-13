import { VStack } from "native-base";
import Icon from 'react-native-vector-icons/AntDesign';

type CircleProps = {
  status?: 'done' | 'progress' | 'not Started';
}

export default function Circle({ status }: CircleProps) {
  return (
    <>
      {status === 'done' && (
        <VStack 
          width={6}
          height={6}
          rounded={'full'}
          bg={'red.300'}
          alignItems="center"
          justifyContent="center"
          p={0.5}
          mt={1}>
            <Icon name="check" color="white" size={18} />
          </VStack>
      )}
      {!status && (
        <VStack
          width={6}
          height={6}
          rounded={'full'}
          borderWidth={2}
          mt={1}
        />
      )}

    </>

  )
}