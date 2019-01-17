import {
  Segment,
  Image,
  Grid,
  Header
} from 'semantic-ui-react'

const src = '/static/images/me.jpeg'



const About = () => (
  <Segment style={{ padding: '8em 0em' }} vertical id="about" >
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Image bordered rounded size='large' src={src} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' style={{ fontSize: '2em' }}>
              About
            </Header>
            <p style={{ fontSize: '1em' }}>
            Madison is a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. 
            Her background in brand strategy, visual design, and account management inform her mindful but competitive approach. 
            Madison is fueled by her passion for understanding the nuances of cross-cultural advertising. She considers herself a 
            ‘forever student,’ eager to both build on her academic foundations in psychology and sociology 
            and stay in tune with the latest digital marketing strategies through continued coursework.
            </p>
            <p style={{ fontSize: '1em' }}>
            Her hunger for knowledge and determination to turn information into action has contributed to her most recent success 
            at Rockwell Group, where she led international, award-winning campaigns for heavy-hitting brands, such as Puma, Gucci,
            and Rolex. Meanwhile, she vastly improved the productivity of 
            her team by implementing strategic project management methods and ensuring a work-life balance for her department.
            </p>
            <p style={{ fontSize: '1em' }}>
            Madison believes mindfulness in the workplace is key to success - a tenet she lives out through her interests in yoga, 
            meditation, gardening, and painting. Madison is currently working as 
            a freelance marketing director and is always interested in a challenge. Reach out to madisonblackstone@gmail.com to connect!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
</Segment>
)

export default About;