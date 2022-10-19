import React from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'
import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


export default function JobList() {
    const [jobPostings, setjobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getAllActiveJobPostings().then(result => setjobPostings(result.data))
    }, [])


    return (
        <div>
            <Button as={NavLink} to="/joblistsortbydate">Tarihe Göre Sırala</Button>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maksimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.jobposition.positionName}</Table.Cell>
                                <Table.Cell>{jobPosting.job_Description}</Table.Cell>
                                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.min_salary}</Table.Cell>
                                <Table.Cell>{jobPosting.max_salary}</Table.Cell>
                                <Table.Cell>{jobPosting.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{jobPosting.lastapplicationdeadline}</Table.Cell>
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
