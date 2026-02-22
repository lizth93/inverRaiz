import styled from '@emotion/styled'

function FooterComponent({ className }: { className?: string }) {
    return (
        <footer className={className}>
            <div>
                <h3>InvestLuz</h3>
                <p>&copy; 2026 InvestLuz. Todos los derechos reservados.</p>
            </div>
            <div>
                <p>Contacto: info@investluz.com</p>
            </div>
        </footer>
    )
}

export default styled(FooterComponent)`
  background-color: #12343B;
  color: #F4F4F2;
  padding: 40px 20px;
  text-align: center;
  margin-top: 80px;

  h3 {
    color: #B87333;
    margin: 0 0 10px 0;
  }

  p {
    margin: 5px 0;
  }

  div {
    margin: 10px 0;
  }
`
