import axios from "axios"

export default class CvService{
    getCvWithAllDetails(userId){
        return axios.get("http://localhost:8082/api/Cv/getCvWithAllDetails?id="+userId)
    }

}