import {
    Segment,
    Image,
    Grid,
    Header,
    Container,
    Divider
  } from 'semantic-ui-react'

  const Education = () => (
    <Segment style={{ padding: '8em 0em'}} vertical id="education">
        <Grid container stackable verticalAlign='middle'>
        <Header as='h2' style={{ fontSize: '2em' }}>
            Education
        </Header>
        <Grid.Row>
            <Container textAlign='center'>
                <Header as='h3' style={{ fontSize: '1.5em' }}>
                    UNIVERSIDAD DE LA REPUBLICA, URUGUAY
                </Header>
                <p style={{ fontSize: '1em' }}>
                    BACHELOR OF COMPUTER SCIENCE
                </p>
                <p >
                I studied International Game Architecture and Design at the NHTV Breda University of Applied Sciences. Here I have gained strong knowledge a wide variety of subjects including data structures, networking, audio and graphics programming.
                </p>
                <Header as='h5'>
                    Graduating in: 2018
                </Header>
            </Container>
        </Grid.Row>
        </Grid>
    </Segment>
  )



  export default Education;