import axios from "axios"

export default class EmployerService{
    getAllEmployers(){
        return axios.get("http://localhost:8082/api/employers/getall")
    }
    add(values){
        return axios.post("http://localhost:8082/api/employers/add",values)
    }

}