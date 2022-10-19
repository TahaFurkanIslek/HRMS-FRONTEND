import React from 'react'
import JobPostingService from '../services/jobPostingService'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'

export default function EmployersJobPostings() {
  let { id } = useParams()
  let jobPostingService = new JobPostingService()
  const [employersJobPostings, setemployersJobPostings] = useState([])
  useEffect(() => {
  jobPostingService.getAllActiveJobPostingsWithId(id).then(result=>setemployersJobPostings(result.data))
  }, [])


  return (
    <div>
      <h2></h2>
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
                        employersJobPostings.map(employerJobPosting => (
                            <Table.Row key={employerJobPosting.id}>
                                <Table.Cell>{employerJobPosting.jobposition.positionName}</Table.Cell>
                                <Table.Cell>{employerJobPosting.job_Description}</Table.Cell>
                                <Table.Cell>{employerJobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{employerJobPosting.min_salary}</Table.Cell>
                                <Table.Cell>{employerJobPosting.max_salary}</Table.Cell>
                                <Table.Cell>{employerJobPosting.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{employerJobPosting.lastapplicationdeadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
                </Table>
    </div>
  )
}
