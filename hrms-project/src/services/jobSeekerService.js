import axios from "axios"

export default class JobSeekerService{
    getAllJobSeekers(){
        return axios.get("http://localhost:8082/api/job_seekers/getall")
    }
    getJobSeekersById(id){
        return axios.get("http://localhost:8082/api/job_seekers/getById?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8082/api/job_seekers/add",values)
    }
}