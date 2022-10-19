import React from 'react'
import { useState, useEffect } from 'react'
import JobSeekerService from '../services/jobSeekerService'
import { Button, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function JobSeekers() {
    const [jobSeekers, setjobSeekers] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getAllJobSeekers().then(result => setjobSeekers(result.data))
    }, [])
    return (
        <div>
            <Card.Group>
                {jobSeekers.map(jobSeekers =>(
                   <Card >
                    <Card.Content>
                        <Card.Header> <Link to={`/jobseekerdetail/${jobSeekers.id}`}>{jobSeekers.name}</Link></Card.Header>
                        <Card.Meta>{jobSeekers.surname}</Card.Meta>
                        
                    </Card.Content>
                    
                </Card> 
                ))
                }
                
            </Card.Group>

        </div>
    )
}
