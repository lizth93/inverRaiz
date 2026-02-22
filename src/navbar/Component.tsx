import styled from '@emotion/styled'

function Navbar({ className }: { className?: string }) {
    return (
        <nav className={className}>
            <h2>InvestLuz</h2>
            <button>Invertir</button>
        </nav>
    )
}

export default styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #12343B;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;

  h2 {
    color: #B87333;
    margin: 0;
  }

  button {
    background-color: #B87333;
    color: #12343B;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
  }
`
