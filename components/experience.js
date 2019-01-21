import {
    Segment,
    Image,
    Grid,
    Header,
    Container,
    Divider
  } from 'semantic-ui-react'

  const descriptions = [
    {
      text: "I've held three different positions in this company. From part-time employee to full time intern and now finally as a full time employee in the data division. I am responsible for the extraction of high quality data from the web. I develop software that extracts information from the unstructured deep web and that converts it into a structured format for further data analysis."
    },
    {
      text: 'When I turned 18 I finally launched my own sole proprietorship, Kaiwa-Projects. This has allowed me to do a wide variety of freelance jobs. Most of the freelance jobs were custom solutions such as customer management systems, online hotel or guesthouse booking systems or lead generation applications.'
    }
  ]

  const projects = [
    [
      {
        name: 'CORE', logo: 'static/images/coreL.png'
      },
      {
        name: 'BOLT', logo: 'static/images/boltL.png'
      },
      {
        name: 'PortalIA', logo: 'static/images/portalL.png'
      },
      {
        name: 'ISGI', logo: 'static/images/isgiL.png'
      }
    ],
    [
      {
        name: 'monitor1', logo: ''
      },
      {
        name: 'monitor2', logo: ''
      },
      {
        name: 'monitor3', logo: ''
      }
    ]
  ]

  const ProjectList = () => {
    return(
    <Container textAlign='center'>
    <Image.Group size='small'>{projects[0].map(project => 
        <Image rounded  key={project.name} src={project.logo} style={{ margin: '0 2em'}}/>
    )}</Image.Group>
    </Container>
    )
  }

  const Experience = () => (

    <Segment style={{ padding: '8em 0em' }} vertical id="experience">
    
    <Grid container stackable verticalAlign='middle' padded='vertically'>
    <Header as='h2' style={{ fontSize: '2em' }}>
      Work Experience
    </Header>
      <Grid.Row >
        <Grid.Column>
          <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
            DEVOPS SOFTWARE ENGINEER
          </Header>
          <p style={{ textAlign: 'center'}}>{descriptions[0].text}</p>
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row style={{ marginBottom: '2em'}}>
        <ProjectList />
      </Grid.Row>

      <Divider/>

      <Grid.Row style={{ marginTop: '2em'}}>
        <Grid.Column>
          <Header as='h3' style={{ fontSize: '1.5em', textAlign: 'center' }}>
            BI DEVELOPER
          </Header>
          <p style={{ textAlign: 'center'}}>{descriptions[1].text}</p>
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row>
        <ProjectList />
      </Grid.Row>

    </Grid>
    </Segment>


  )

  export default Experience;