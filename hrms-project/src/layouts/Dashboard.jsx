import React from 'react'
import JobList from '../pages/JobList'
import JobSeekers from '../pages/JobSeekers'
import Employers from '../pages/Employers'
import Categories from './Categories'
import JobListSortByDate from '../pages/JobListSortByDate'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import JobSeekerDetail from '../pages/JobSeekerDetail'
import JobPostingAdd from '../pages/JobPostingAdd'
import JobSeekerAdd from '../pages/JobSeekerAdd'
import EmployerAdd from '../pages/EmployerAdd'
import JobPositionAdd from '../pages/JobPositionAdd'
import JobSeekersCvDetail from '../pages/JobSeekersCvDetail'
import EmployersJobPostings from '../pages/EmployersJobPostings'
import DeletableJobList from '../pages/DeletableJobList'
import CvAdd from '../pages/CvAdd'
import Deneme from '../pages/Deneme'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <Categories />
          </GridColumn>
          <GridColumn width={13}>
            <Routes>
              <Route path="/" element={<JobList />} />
              <Route path="/jobseekers" element={<JobSeekers />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/joblistsortbydate" element={<JobListSortByDate />} />
              <Route path="/jobseekerdetail/:id" element={<JobSeekerDetail/>}/>
              <Route path="/jobposting/add" element={<JobPostingAdd/>}/>
              <Route path="/jobseeker/add" element={<JobSeekerAdd/>}/>
              <Route path="/employer/add" element={<EmployerAdd/>}/>
              <Route path="/jobposition/add" element={<JobPositionAdd/>}/>
              <Route path="/jobseekercvdetail/:id" element={<JobSeekersCvDetail/>}/>
              <Route path="/employersjobpostings/:id" element={<EmployersJobPostings/>}/>
              <Route path="/deletablejoblist" element={<DeletableJobList/>}/>
              <Route path="/cv/add" element={<CvAdd/>}/>
              <Route path="/deneme" element={<Deneme/>}/>
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>


    </div>
  )
}
