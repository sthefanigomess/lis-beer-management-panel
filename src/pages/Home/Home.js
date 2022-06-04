import styled from "styled-components";
import LisBeerLogo from "../../images/lis-beer-logo.png"

export const Home = () => {
    return (
        <Container>
            <Image src={LisBeerLogo}/>
            <h1>LisBeer</h1>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f2a951;

  & > h1 {
    font-family: 'Cinzel', serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
  }
`

const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`