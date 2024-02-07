
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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { login } from '../Redux/Auth/action'
import { useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const dispatch=useDispatch()
    const auth=useSelector((store)=> store.authReducer.isAuth)
    console.log(auth)
    const error=useSelector((store)=> store.authReducer.isError)
    const location=useLocation()
    const navigate=useNavigate()


    useEffect(()=>{
      if(auth){
        navigate(location.state)
      }
    },[auth])

  const handleLogin=()=>{
    let userData={Email, Password}
 
    dispatch(login(userData))
   console.log(userData);
  }








  return (
    <Stack minH="60vh" direction={{ base: 'column-reverse', md: 'row' }} mt={"30px"}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" src="https://www.lakemeadhospital.com/wp-content/uploads/2022/03/Health-Care1.jpg" />
      </Flex>
      <Flex p={8} flex={1} align="center" justifyContent="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Login in to your account</Heading>
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
            <VStack spacing={4} w="100%" auth={`${auth}`} error={`${error}`} >
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" value={Email} onChange={(e)=>setEmail(e.target.value)}  />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input rounded="md" type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}  />
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
                onClick={handleLogin}
              >
                Login
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

