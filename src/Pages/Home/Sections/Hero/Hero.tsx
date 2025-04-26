import { styled } from "@mui/system"
import { Grid } from "@mui/system"
import Avatar from "../../../../assets/images/Lucas_profilePicture.jpeg"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        color: "white"
    }))

    const StyledPfp = styled("img")(() => ({
        width: "20%",
        borderRadius: "70%",
        borderColor: "black"
    }))

    return (
      <>
        <StyledPfp src={Avatar}></StyledPfp>
        
        <StyledHero>

          <Grid container spacing={2}>
            <Grid size={8}>
              size=8
            </Grid>
            <Grid size={4}>
              size=4
            </Grid>
            <Grid size={4}>
              size=4
            </Grid>
            <Grid size={8}>
              size=8
            </Grid>
          </Grid>
        
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  