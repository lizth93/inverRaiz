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
  background-color: #12343B;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    color: #B87333;
    margin: 0;
    width: 100%
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
