import {
    Segment,
    Image,
    Grid,
    Header,
    Container,
    Reveal,
    Button
  } from 'semantic-ui-react'


  const projects = [
      {
          name: "qode", title: "QODE" , languages: 'Angular + Flask' , image: 'https://react.semantic-ui.com/images/wireframe/square-image.png', link: "https://qodeapp.herokuapp.com/"
      },
      {
          name: "influence", title: "INFLUENCE", languages: "React + GraphQL", image: 'https://react.semantic-ui.com/images/wireframe/square-image.png', link: ''
      },
  ]

  const ProjectList = () => {
    return(
    <Grid.Row textAlign='center'>{projects.map(project =>
      <Grid.Column key={project.name} width={3} /* stretched */> 
        <Reveal animated='move up' style={{transition: ".5s"}}>
          <Reveal.Content visible onChange={() => console.log('abajo')}>
            <Image src={project.image} size='large' />
          </Reveal.Content>
          <Reveal.Content hidden >
            <div style={{padding: '2em 0'}}>
            <Header as='h3'>{project.title}</Header>
            <p style={{color: 'teal'}} >{project.languages}</p>
            </div>
            <Button 
             basic color='teal'
             href={project.link} target="_blank" onClick={() => console.log('asfa')}>VIEW SITE</Button>
          </Reveal.Content>
      
        </Reveal>
      </Grid.Column>
      )}
    </Grid.Row>
    )
  }


  const Projects = () => (

    <Segment style={{ padding: '8em 0em', backgroundColor: '#f5f5f5' }} vertical id="experience">
    
    <Grid container stackable verticalAlign='middle' padded='vertically'>
      <Header as='h2' style={{ fontSize: '2em' }}>
        Projects
      </Header>
      
      <Grid.Row>

      </Grid.Row>
     <ProjectList />
      
      

    </Grid>
    </Segment>


  )

  export default Projects;