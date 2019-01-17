import { Component } from 'react';
import { Container, Form, Segment, Header } from 'semantic-ui-react'


class Contact extends Component {
  state = {}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    const { value } = this.state
    return (
      <div style={{backgroundColor: '#1b1c1d'}}>
      <Container text id="contact">
      <Segment style={{ padding: '8em 0em' }} vertical>
       <Header as='h2' style={{ fontSize: '2.5em', color: '#fff' }}>
         Contact
       </Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='' name="name" placeholder='Your Name' onChange={this.handleChange} />
            <Form.Input label='' placeholder='Email' name="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Input fluid label='' placeholder='Subject'  name="subject" onChange={this.handleChange} />
          <Form.TextArea label='' placeholder='Your message...' name="message" onChange={this.handleChange} />
          <Form.Button onClick={this.handleSubmit}>Send</Form.Button>
        </Form> 
      </Segment>
      </Container>
      </div>
    )
  }
}

export default Contact