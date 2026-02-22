import styled from "@emotion/styled";

function HeroComponent({ className }: { className?: string }) {
    return (
        <div className={className}>
            <h1>Invierte con respaldo hipotecario real</h1>
            <p>Patrimonio protegido. Rendimientos sólidos.</p>
            <button>Comenzar ahora</button>
        </div>
    );
}

export default styled(HeroComponent)`
 background-color: #12343B;
  color: #F4F4F2;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 42px;
  }

  p {
    color: #B87333;
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    background-color: #B87333;
    color: #12343B;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`
