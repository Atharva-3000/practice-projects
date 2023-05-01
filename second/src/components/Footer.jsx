import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdSend } from 'react-icons/md';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter your email here !"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <MdSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
            <Heading textTransform={"uppercase"} textAlign={"center"}>
                VIDEO HUB
            </Heading>
            <Text>All rights reserved</Text>
        </VStack>


<VStack
          w={'full'}
        >
        <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
        <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://github.com/Atharva-3000">GitHub</a>
        </Button>
        <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://www.linkedin.com/in/atharva-deshmukh-b0479522a/">LinkedIn</a>
        </Button>

        <Button variant={"link"} colorScheme={"purple"}>
            <a href="https://twitter.com/Powxu_XD">Twitter</a>
        </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
