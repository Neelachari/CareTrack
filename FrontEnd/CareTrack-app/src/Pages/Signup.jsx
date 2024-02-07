import * as React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex
} from '@chakra-ui/react';

export const Signup = () => {
   











  return (
    <Stack minH="100vh" direction={{ base: 'column-reverse', md: 'row' }} mt={"30px"} >
      <Flex flex={1}>
        <Image  alt="Cover image" objectFit="cover" src="https://www.cflowapps.com/wp-content/uploads/2023/02/bpm_helthcre.jpg" />
      </Flex>
      <Flex p={8} flex={1} align="center" justifyContent="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
            <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Avatar</FormLabel>
                <Input rounded="md" type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Age</FormLabel>
                <Input rounded="md" type="Number" maxLength={2} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input rounded="md" type="password" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justifyContent="space-between" w="100%">
                <Checkbox colorScheme="red" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button
                bg="red.300"
                color="white"
                _hover={{
                  bg: 'red.500'
                }}
                rounded="md"
                w="100%"
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

