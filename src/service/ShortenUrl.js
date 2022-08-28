import { API_URL } from "../constants"
import axios from "axios"



class ShortenUrl  {
    shortenUrl(url, link_id,user_ip, user_country, setStatus){
        axios.post(`${API_URL}/api/shorten`, {url, link_id,user_ip,user_country})
            .then(response => {
                if(response.data.message){
                    setStatus(response.data.message)
                }
                else{
                    setStatus(response.data.status)
                }
            })
    }

    getShorten(link_id, Navigate){
        axios.post(`${API_URL}/api/getShoten`, {link_id})
            .then(response => {
                if(response.data.message){
                    window.location.href = response.data.link
                }
                else{
                    Navigate("/404")
                }
            })
    }

    logVisit(link_id, ip){
        axios.post(`${API_URL}/api/visit`, {link_id, ip})
            .then(response => {
                if(response.data.message){
                    console.log(response.data.message);
                }
            })
    }
}

export default new ShortenUrl()
