import PropTypes from 'prop-types'
import Head from 'next/head';
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {
  NProgress.start();
}

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Nicolas Urruty'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Computer Engineer'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.2em' : '0.8em',
      }}
    />
    <List horizontal relaxed='very'>
    <List.Item 
      href='https://www.twitter.com/nicourruty'
      target="_blank" >
      <List.Icon name='twitter' color="grey" size='large' verticalAlign='middle' />
    </List.Item>
    <List.Item 
      href='https://www.facebook.com/nurruty'
      target="_blank" >
      <List.Icon name='facebook' color="grey" size='large' verticalAlign='middle' />
    </List.Item>
    <List.Item 
      href='https://www.github.com/nurruty'
      target="_blank" >
      <List.Icon name='github' color="grey" size='large' verticalAlign='middle' />
    </List.Item>
    <List.Item 
      href='https://www.linkedin.com/in/nicolasurruty'
      target="_blank"
      >
      <List.Icon name='linkedin' color="grey" size='large' verticalAlign='middle' />
    </List.Item>
  </List>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active href="/">Home</Menu.Item>
                <Menu.Item as='a' href="#about">About</Menu.Item>
                <Menu.Item as='a' href="#skills">Skills</Menu.Item>
                <Menu.Item as='a' href="#experience">Experience</Menu.Item>
                <Menu.Item as='a' href="#projects">Projects</Menu.Item>
                <Menu.Item as='a' href="#education">Education</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} href="#contact">
                    Contact
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a' active href="/">Home</Menu.Item>
          <Menu.Item as='a' href="#about">About</Menu.Item>
          <Menu.Item as='a' href="#skills">Skills</Menu.Item>
          <Menu.Item as='a' href="#experience">Experience</Menu.Item>
          <Menu.Item as='a' href="#projects">Projects</Menu.Item>
          <Menu.Item as='a' href="#education">Education</Menu.Item>
          <Menu.Item as='a' href="#contact">Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Contact
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div id="home">
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomePage = ({children}) => (
  <div >
  <Head>
    <title>Nicolas Urruty</title>
  </Head>
  <ResponsiveContainer>
    {children}
  </ResponsiveContainer>
  </div>
)
export default HomePage;