import {
  Segment,
  Image,
  Grid,
  Header,
  Card,
  Progress
} from 'semantic-ui-react'

const skills = [
  {
    language: 'Python',
    percent: '40',
    meta: '2 years, 2 projects',
  },
  {
    language: 'SQL-Server',
    percent: '80',
    meta: '4 years, daily basis',
  },
  {
    language: 'Oracle',
    percent: '30',
    meta: '2 years, 2 projects',
  },
  {
    language: 'Javascript',
    percent: '55',
    meta: '3 years, 3 projects',
  },
  {
    language: 'React',
    percent: '20',
    meta: '1 years, 2 projects',
  },
  {
    language: 'Genexus',
    percent: '75',
    meta: '4 years, 3 projects',
  },
]

const tecs = [
  {
    name: "Microstrategy",
    src: '/static/images/mstr.png'
  },
  {
    name: "Git",
    src: '/static/images/git.png'
  },
  {
    name: "SQL-Server Studio",
    src: '/static/images/mstr.png'
  },
]

const SkillsList = ({data}) => {
  return (
   <Card.Group centered>{skills.map(item => 
    <Card id={item.language}>
      <Card.Content>
        <Card.Header>{item.language}</Card.Header>
      
        <div style={{ paddingTop: '1em'  }}>
          <Card.Meta>{item.meta}</Card.Meta>
          <Progress percent={item.percent} color="teal"/>
        </div>
      </Card.Content>
    </Card>
  )}</Card.Group>
  )
}

const TecList = () => {
  return(
    <Image.Group>{tecs.map(tec => 
        <Image  rounded size='small' id={tec.name} src={tec.src} circular />   
    )}</Image.Group>
  )
}


const Skills = () => (
  <Segment style={{ padding: '8em 0em', backgroundColor: '#f5f5f5' }} vertical id="skills">
    
    <Grid container stackable verticalAlign='middle'>
    <Header as='h2' style={{ fontSize: '2em' }}>
      Skills
    </Header>
      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ fontSize: '1.5em' }}>
            Languages
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column >
          <SkillsList />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Header as='h3' style={{ fontSize: '1.5em' }}>
            Technologies
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <TecList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  
  </Segment>

)

export default Skills