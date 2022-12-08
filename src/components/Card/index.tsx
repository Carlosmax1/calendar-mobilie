import { Box, VStack } from "native-base";

import Circle from "../Circle";

type CardProps = {
  id: string | number;
  title: string;
  start: string,
  end: string;
  status: string;
}

export default function Card(
  {id, title, start, end, status }: CardProps
) {
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
        mt={4}
        height={90}
        width={'full'}
        bgColor={'amber.100'}
        ml={3}
      >

      </Box>
    </VStack>
  )
}