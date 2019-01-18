import { Component } from 'react'
import { Header, Container, Icon, Button } from 'semantic-ui-react'

class Footer extends Component {

  handleClick = () => console.log('asdfas')

  render() {

    return (
      <footer>
        <Icon 
        style={{
          position: 'absolute',
          top: '-25px',
          background: '#E31B6D',
          fontSize: '30pt',
          width: '47px',
          height: '50px',
          lineHeight: '40pt',
          left: '0',
          right: '0',
          margin: '0 auto',
          cursor: 'pointer',
          transition: 'background .5s'
        }}
        name="angle double up" inverted
        onClick={this.handleClick}
        />
        
        <Container style={{ padding: '.5em 0em' }} text>
          <div className="footnote" onClick={this.handleClick}>
              Nicolás Urruty &copy;2019
          </div>
        </Container>

        <style jsx>{`
          footer {
            background: #192029;
            padding: 50px 0 20px 0;
            position: relative;
          }

          footer .footnote {
            font-size: 15pt;
            color: #8F9AA7;
            margin-top: 35px;
            opacity: 0.6;
            text-align: center;
          }
        `}</style>
    </footer>
        
    )
  }
}

export default Footer;