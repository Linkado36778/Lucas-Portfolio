import { styled } from "@mui/system"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    return (
      <>
        <StyledHero>
            Hello World
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  