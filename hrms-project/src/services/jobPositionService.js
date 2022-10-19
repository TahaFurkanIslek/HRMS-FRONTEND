import axios from "axios"

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:8082/api/job_positions/getall")
    }
    add(values){
        return axios.post("http://localhost:8082/api/job_positions/add",values)
    }
}