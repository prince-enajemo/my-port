import Header from "./home-components/header"
import Hero from "./home-components/hero"
import Section2 from "./home-components/section2"
import Myservices from "./home-components/my-services"
import Skills from "./home-components/skillls"

function App() {
  

  return (
    <div className="overflow-hidden">
      <Header />
     <Hero/>
     <Section2/>
     <Myservices/>
     <Skills/>
    </div>
  )
}

export default App
