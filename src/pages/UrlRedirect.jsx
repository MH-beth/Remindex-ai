import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShortenUrl from '../service/ShortenUrl'

const UrlRedirect = () => {
    const {id} = useParams()
    const Navigate = useNavigate()
    const [ip, setIp ] = React.useState("")
    React.useEffect(() => {
        fetch("https://geolocation-db.com/json/ac71b0c0-1248-11ec-b75e-4962cc3311c9")
        .then(response => response.json())
        .then(data => setIp(data.IPv4))
        
        ShortenUrl.logVisit(id,ip);
        ShortenUrl.getShorten(id,Navigate )
    }, [])
  return (
    <div>Redirecting ...</div>
  )
}

export default UrlRedirect