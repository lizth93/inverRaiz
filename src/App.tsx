
import './App.css'
import Navbar from './navbar/Component'
import HeroComponent from './hero/Component'
import PerformanceComponent from './performance/Component'
import FooterComponent from './footer/Component'

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#F4F4F2" }}>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <HeroComponent />
        <PerformanceComponent />
      </div>
      <FooterComponent />
    </div>
  )
}