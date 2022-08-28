import React, {useState, useEffect} from 'react'
import { CLIENT } from '../constants';
import ShortenUrl from '../service/ShortenUrl';

const Shortener = () => {
    const generateId = () => {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const res = [];
        for(let i = 0; i < 6; i++){
            res.push(nums[Math.floor(Math.random() * nums.length)]);
        }
        return res.join("");
    }

  const [ip, setIp] = useState("");
  const [country, setCountry] = useState("");
  const [link, setLink] = useState("");
  const [link_id, setLinkId] = useState(generateId());
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("")
  React.useEffect(() => {
    fetch("https://geolocation-db.com/json/ac71b0c0-1248-11ec-b75e-4962cc3311c9")
        .then(response => response.json())
        .then(data => setIp(data.IPv4))
        .then(data => setCountry(data.country_name))
}, [])
  const handleSub = () => {
    ShortenUrl.shortenUrl(link, link_id,ip,country,setStatus)
    setLinkId(generateId());
    setUrl(`${CLIENT}/${link_id}`)
    
  }
  return (
    <div>
      <h1>Remindex shortener</h1>
      <br/>
      <textarea placeholder="Enter your url" onChange = {e => setLink(e.target.value)} />
      <br/>
      <button onClick = {() => handleSub()}>Shorten</button>
      {(url.length > 0) && <textarea disabled value = {url} />}
      <div className="status">
        <p>{status}</p>
      </div>
    </div>
  )
}

export default Shortener