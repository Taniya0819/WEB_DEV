import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardOne } from './components/Card1'
import { CardTwo } from './components/Card2'
import { CardThree } from './components/Card3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br></br>
    <h1>About Our Website :</h1>
    <br></br>
    <p className="para" >Ink Well is a leading provider of note-taking solutions, empowering individuals and teams to capture, organize, 
    and access their ideas seamlessly.
    Our mission is to revolutionize the way people capture and manage information, 
    fostering increased productivity and knowledge retention through an intuitive and innovative platform.<br></br> <br></br>
    Increased Efficiency: Streamline your workflow by capturing and organizing your notes in one centralized, accessible location.<br></br>
    Enhanced Security: Enjoy peace of mind knowing your data is protected with industry-leading security measures.<br></br>
    Scalability and Flexibility: "Our platform adapts to your needs, offering customizable features and integrations to fit your unique 
    workflow.
    <br></br> <br></br> 
    Ink Well is led by a team of passionate students.Does the thought of cluttered notebooks and 
    lost ideas send shivers down your spine? We hear you! At Ink Well, we know the struggle is real.</p>
    <br></br> <br></br> <br></br> <br></br> 

    <h1>About Our Developers :</h1>
    <br></br> <br></br>

    <div className="Cards flex md:flex-row lg:flex-row flex-col">
      <CardOne username="Vardhman"/>
      <br></br> <br></br> 
      <CardTwo username="Taniya"/>
      <br></br> <br></br> 
      <CardThree username="Vartika"/> 
    </div>
    </>
  )
}

export default App



