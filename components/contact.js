import { Component } from 'react';
import { Container, Form, Segment, Header, Icon, Button } from 'semantic-ui-react'


class Contact extends Component {
  state = {}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { value } = this.state
    return (
      <div style={{backgroundColor: '#1B242F'}}>
      <Container text id="contact">
      <Segment style={{ padding: '8em 0em' }} vertical>
       <Header as='h2' style={{ fontSize: '2.5em', color: '#fff' }}>
         Contact
       </Header>
        <Form className="gform" method="POST"
          action="https://script.google.com/macros/s/AKfycbw7IKt4A19xhKKLHohYsS-tZiLME-CWONYGB784/exec"
        >
          <Form.Group widths='equal'>
            <Form.Input fluid label='' name="name" placeholder='Your Name' onChange={this.handleChange} />
            <Form.Input label='' placeholder='Email' name="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Input fluid label='' placeholder='Subject'  name="subject" onChange={this.handleChange} />
          <Form.TextArea label='' placeholder='Your message...' name="message" onChange={this.handleChange} />
          <Form.Button ><Icon name='send' />Send</Form.Button>
          <div style={{display:'none'}} className="thankyou_message">
              <Header as='h2' style={{color: '#fff'}}><em>Thanks</em> for contacting me! I will get back to you soon!</Header>
          </div>
        </Form> 
      </Segment>
      </Container>
      </div>
    )
  }
}

export default Contact