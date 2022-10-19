import React from 'react'
import { useParams } from 'react-router-dom'
import JobSeekerService from '../services/jobSeekerService'
import { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default function JobSeekerDetail() {
    let { id } = useParams()

    const [jobSeeker, setjobSeeker] = useState({})

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekersById(id).then(result => setjobSeeker(result.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{jobSeeker.name}</Table.Cell>
                        <Table.Cell>{jobSeeker.surname}</Table.Cell>
                        <Table.Cell>{jobSeeker.birthyear}</Table.Cell>
                    </Table.Row>
                    
                </Table.Body>
                
            </Table>
            <Button  basic color='green' as={NavLink} to={`/jobseekercvdetail/${id}`}>
                                Cv Detayına Git
                            </Button>
        </div>
    )
}
