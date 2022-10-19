import React from 'react'
import { useParams } from 'react-router-dom'
import CvService from '../services/cvService'
import { Table } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

export default function JobSeekersCvDetail() {
  let { id } = useParams()
  let message="Evet"
  let message2="Hayır"
  let message3="Devam Ediyor"
  const [cv, setcv] = useState({})
  const [languages, setlanguages] = useState([])
  const [jobExperiences,setjobExperiences]=useState([])
  
  let cvService = new CvService()
  useEffect(() => {
    cvService.getCvWithAllDetails(id).then(result => setcv(result.data.cv))
  }, [])
  useEffect(() => {
    cvService.getCvWithAllDetails(id).then(result => setlanguages(result.data.language))
  }, [])
  useEffect(() => {
  cvService.getCvWithAllDetails(id).then(result => setjobExperiences(result.data.jobExperience))
   }, [])

   
  return (
    <div>
      <h2>Genel Bilgiler</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Okulu</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet Yılı</Table.HeaderCell>
            <Table.HeaderCell>Github Hesabı</Table.HeaderCell>
            <Table.HeaderCell>Linkedin Hesabı  </Table.HeaderCell>
            <Table.HeaderCell>Ekstra</Table.HeaderCell>
            <Table.HeaderCell>Ön yazı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row key={cv.id}>
            <Table.Cell>{cv.schoolName}</Table.Cell>
            <Table.Cell>{cv.graduationYear}</Table.Cell>
            <Table.Cell>{cv.githubAccount}</Table.Cell>
            <Table.Cell>{cv.linkedinAccount}</Table.Cell>
            <Table.Cell>{cv.programmingLanguageAndTechnology}</Table.Cell>
            <Table.Cell>{cv.coverLetter}</Table.Cell>
          </Table.Row>

        </Table.Body>

      </Table>

      <h2>Yabancı Diller</h2>
       <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Dil</Table.HeaderCell>
            <Table.HeaderCell>Seviye(1-5)</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            languages.map(language => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.language}</Table.Cell>
                <Table.Cell>{language.level}</Table.Cell>
              </Table.Row>
            ))

          }
        </Table.Body>
        </Table> 
        
       <h2>İş Deneyimleri</h2>
       <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>iş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Devam Etme Durumu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
           {
            jobExperiences.map(jobExperience => (
              <Table.Row key={jobExperience.id}>
                <Table.Cell>{jobExperience.companyName}</Table.Cell>
                <Table.Cell>{jobExperience.position}</Table.Cell>
                <Table.Cell>{jobExperience.start_time}</Table.Cell>
                {jobExperience._Continue? <Table.Cell>{message3}</Table.Cell>:<Table.Cell>{jobExperience.finish_time}</Table.Cell> }
                {jobExperience._Continue? <Table.Cell>{message}</Table.Cell>:<Table.Cell>{message2}</Table.Cell> }
                </Table.Row>
            ))

          } 
        </Table.Body>
        

      </Table>  
    </div>
  )
}
