import { TableContainer, Table, Thead, TableCaption, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function GenresList() {

    const API = 'http://127.0.0.1:5555/genres'
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API)
                setList(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, []);

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='gray'>
                <TableCaption>Movies</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Functions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                </Tbody>
            </Table>
        </TableContainer>

    )
}

export default GenresList