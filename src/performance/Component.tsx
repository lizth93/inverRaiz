import styled from '@emotion/styled'

function PerformanceComponent({ className }: { className?: string }) {
    return (
        <section className={className}>
            <h2>Rendimiento promedio anual</h2>
            <h1>12%</h1>
            <p>
                Garantía respaldada por bienes inmuebles.
            </p>
        </section>
    )
}

export default styled(PerformanceComponent)`
  padding: 80px 20px;
  text-align: center;
  background-color: #F4F4F2;

  h2 {
    color: #12343B;
    margin: 0 0 20px 0;
    font-size: 24px;
  }

  h1 {
    color: #B87333;
    font-size: 48px;
    margin: 0 0 20px 0;
  }

  p {
    color: #2C2C2C;
    margin: 0;
    font-size: 16px;
  }
`
