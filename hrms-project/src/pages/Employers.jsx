import React from 'react'
import EmployerService from '../services/employerService'
import { Icon, Menu, Table } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'


export default function Employers() {
    const [employers, setemployers] = useState([])
    useEffect(() => {
      let employerService=new EmployerService()
      employerService.getAllEmployers().then(result => setemployers(result.data))
    },[])
   
    
    return (
    <div>
        <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employers => (
                            <Table.Row key={employers.id}>
                                <Table.Cell>{employers.companyName}</Table.Cell>
                                <Table.Cell>{employers.websiteName}</Table.Cell>
                                <Table.Cell>{employers.phoneNumber}</Table.Cell>
                                <Table.Cell><Button negative as={NavLink} to={`/employersjobpostings/${employers.id}`}> İş İlanlarını Listele </Button></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
    </div>
  )
}
