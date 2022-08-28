#Remindex AI
<p>Remindex AI is a website that allows you to shorten an URL</p>

demo Test (the server shall be down, if this is the case, start the project on local by following these steps) : <a href = "https://remindex-ai.web.app/">Demo</a>

<h1>Start the project on local </h1>
<ul>
  <li>1- Install the project (git clone https://github.com/MH-beth/Remindex-ai)</li>
  <li>2 - cd remindex_ai</li>
  <li>3- Run "npm install"</li>
  <li>4- cd server </li>
  <li>5- run "npm install" </li>
  <li>6- Open a first terminal and run "npm start" on the root file</li>
  <li> 7- open a second terminal and run "npm start" on remindex-ai/server </li>
  <li> ATTENTION : Don't forget to change the file remindex-ai/src/constants.js by the following lines </li>
</ul>

```
export const API_URL = "http://localhost:8080"
export const CLIENT  = "http://localhost:3000"
```
<p>remplacement code of the file remindex-ai/src/constants.js when running local<p>

<h6>Copyright and all right reserved MH-BETH </h6>
