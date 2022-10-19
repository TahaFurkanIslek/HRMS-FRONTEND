import axios from "axios"


export default class JobPostingService{
    getAllJobPostings(){ 
        return axios.get("http://localhost:8082/api/job_postings/getall")
    }
    getAllJobPostingsSortByDate(){
        return axios.get("http://localhost:8082/api/job_postings/OrderByLastapplicationdeadline")
    }
    getAllActiveJobPostingsWithId(id){
        return axios.get("http://localhost:8082/api/job_postings/getByActiveTrueAndEmployerId?id="+id)
    }
    getAllActiveJobPostingsSortByDate(){
        return axios.get("http://localhost:8082/api/job_postings/findByIsActiveOrderByLastapplicationdeadline")
    }
    getAllActiveJobPostings(){
        return axios.get("http://localhost:8082/api/job_postings/findByIsActiveTrue")
    }
    add(values){
        return axios.post("http://localhost:8082/api/job_postings/add",values)
    }
    delete(id){
        return axios.post(`http://localhost:8082/api/job_postings/delete?id=${id}`)
    }
}
