import { Button, Container, Grid, Card, CardMedia } from "@mui/material";
import './HomeView.css'
import image01 from '../../shared/images/image-01.jpg'
import image02 from '../../shared/images/image-02.jpg'
import image03 from '../../shared/images/image-03.jpg'

export const HomeView = () => {
  return (
    <>
      <section className="hero">
        <Container>
            <Grid xs={12} sm={12} md={6} lg={6} >
                <Grid>
                 <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                 <h3>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h3>
                 <Button sx={{ my:2, py: 1.5, px:3 }} variant="contained" color="success">Get Started</Button>
                </Grid>  
            </Grid>
        </Container>
      </section>
      <section className="icon-box">
          <Container>
              <Grid sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div className="box">
                  <Card>
                      <CardMedia component="img" image={image01} alt="img" />                 
                  </Card>
                </div>
                <div className="box" >
                  <Card>
                    <CardMedia component="img" image={image02} alt="img" />
                  </Card>
                </div>
                <div className="box">
                  <Card >
                    <CardMedia component="img" image={image03} alt="img" />
                  </Card>
                </div>
              </Grid>
          </Container>
        
        
        
      </section>
    </>
  );
};
