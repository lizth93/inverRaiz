
import './App.css'
import Navbar from './navbar/Component'
import HeroComponent from './hero/Component'

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#F4F4F2" }}>
      <Navbar />
      <HeroComponent />
      <section style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#12343B" }}>Rendimiento promedio anual</h2>
        <h1 style={{ color: "#B87333", fontSize: "48px" }}>12%</h1>
        <p style={{ color: "#2C2C2C" }}>
          Garantía respaldada por bienes inmuebles.
        </p>
      </section>

    </div>
  )
}