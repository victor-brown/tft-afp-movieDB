import './App.css'
import { extendTheme, ChakraProvider, IconButton, TableContainer, Table, Thead, TableCaption, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {

  return (
    <Router>
    <ChakraProvider theme={theme}>xxxx
    <Routes>
      <Route path="/" element={<StarIcon />} />
      <div>
        <div className='header' style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid grey"}}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem onClick={() => alert('Kagebunshin')}>Genres</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshin')}>Stars</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshin')}>Movies</MenuItem>
              <MenuItem onClick={() => alert('Kagebunshrrissn')}>Directors</MenuItem>
            </MenuList>
          </Menu>
          <h1>Online Movie Database</h1>
          <p>Alk Fejl II.</p>
        </div>
        <div className="container">

        <TableContainer>
  <Table variant='striped' colorScheme='gray'>
    <TableCaption>Movies</TableCaption>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Star</Th>
        <Th>Functions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
      <Tr>
        <Td>Matrix</Td>
        <Td>Kenau Reeves</Td>
        <Td>edit, delete</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
 
        </div>
        <div style={{marginTop: "20px", paddingTop: "20px", borderTop: "1px solid grey"}}>
          <p style={{ textAlign: "center" }}>Online Movie Database - Team S - (SQL, NodeJS, React)</p>
          <p><a href="https://github.com/victor-brown/alkfejl-II-movieDB/issues">https://github.com/victor-brown/alkfejl-II-movieDB/issues</a></p>
          <p><a href="https://trello.com/b/uFaGXWy4/open-movie-database">https://trello.com/b/uFaGXWy4/open-movie-database</a></p>
        </div>
      </div>
      </Routes>
    </ChakraProvider>
     </Router>
  )
}

export default App
