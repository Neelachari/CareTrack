import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useToast
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from "../Images/CARETRACK.png"
import {BsCartPlus} from "react-icons/bs"
// import { SignUp } from '../Pages/SignUp'
import {NavLink, Link} from "react-router-dom"
import "./Navbar.css"
import {useContext} from "react"
// import {AuthContext} from "../Context/AuthContextProvider"
import { Navigate } from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import { useToast } from '@chakra-ui/react'
// interface Props {
//   children: React.ReactNode
// }

// const Links = ['MEDICINES', 'PRODUCTS', 'LAB TESTS', 'CONSULT DOCTORS', 'AYURVEDA', 'CARE PLAN']

const Navlink = (props) => {
  const { children } = props

  // const toast = useToast()

  return (
   <>
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      fontWeight={"500"}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('red'),
      }}
      href={'/'}>
      {children}
    </Box>
    
   </>
    
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const {isAuth,setIsAuth}=useContext(AuthContext)
  let isAuth
//  console.log(isAuth)

 const toast = useToast();

 const handleLogout=()=>{
  // setIsAuth(false)
  toast({
    position:"top",
    isClosable: true,
    duration: 2000,
    status: "Welcome to CareTrack",
    render:()=>(
        <Box color="white" bg="red.500" p="20px" >😐 Logout Successful</Box>
    )
  })
  
  return <Navigate to="/" />
 }

  return (
    <>
      <Box bg={useColorModeValue('white.100', 'white.900')} px={4}  width={"95vw"} borderBottom={"3px solid gray"} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">
              <Box><img width="50px" height={"50px"} src={Logo} alt=""/> </Box>
            </Link>
            <HStack as={'nav'} spacing={10} display={{ base: 'none', md: 'flex' }}  px={2}
      py={1} rounded={'md'}>
            
                <NavLink className='NaveText' to={'/'} >Home</NavLink>
                <NavLink className='NaveText' to={'/Patients'} ><span style={{color:"red", marginLeft:"-15px"}}>*</span>Patients</NavLink>
                <NavLink className='NaveText' to={'/'} >Profile</NavLink>
                <NavLink className='NaveText' to={'/'} >CONSULT DOCTORS</NavLink>
                <NavLink className='NaveText' to={'/'} >AYURVEDA</NavLink>
                <NavLink className='NaveText' to={'/'} >CARE PLAN</NavLink>
            </HStack>
          </HStack >
          {/* <Link to="/BsCartPlus">
          <Flex mr={"100px"} w={"30%"}><BsCartPlus  /></Flex>
          </Link> */}
          <Flex alignItems={'center'}>
            
            <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>

                <Avatar
                ml={"80px"}
                  size={'sm'}
                  src={ `${isAuth ? "https://img.freepik.com/free-icon/man_318-474853.jpg":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJDEnnVNYD3wOk0PIywPT-2m4UETU7lhOSFBO2HywWPvrH7-g45Eh4Rq9F9WxZTYONKU&usqp=CAU'}`
                    
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to="/register">
                  <MenuItem  style={{display:isAuth ? "none":"block"}} >Signup</MenuItem>
                </Link>
                <Link to="/Login">
                <MenuItem style={{display:isAuth ? "none":"block"}} >Login</MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem style={{display:isAuth ? "block":"none"}} onClick={handleLogout } >Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                 <NavLink className='NaveText' to={'/'} >Home</NavLink>
                <NavLink className='NaveText' to={'/Patients'} >Patients</NavLink>
                <NavLink className='NaveText' to={'/'} >Profile</NavLink>
                <NavLink className='NaveText' to={'/'} >CONSULT DOCTORS</NavLink>
                <NavLink className='NaveText' to={'/'} >AYURVEDA</NavLink>
                <NavLink className='NaveText' to={'/'} >CARE PLAN</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}