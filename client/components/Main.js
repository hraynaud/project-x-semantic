import React, {Component} from 'react';
import { Grid,Container, Card, Icon, Image } from 'semantic-ui-react'


class Main extends Component {

  render() {
    return (
      <Container >
      <Container>
       <Card fluid>
       <Card.Content>
          <div className="right floated meta">14h</div>
          <Image size="massive" avatar src="http://semantic-ui.com/images/avatar/large/elliot.jpg"/> Elliot
       </Card.Content>
       <Image fluid src="assets/images/sample_project_hero.jpg"/>
       </Card>
      </Container>
      </Container>
    );
  }
}

export default Main;
