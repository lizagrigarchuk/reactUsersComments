import React ,{Fragment,Component} from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NewsItemPage extends Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" placeholder="title"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input type="textarea" name="body" id="body" placeholder="body"/>
        </FormGroup>
        <Button>Sign in</Button>
    </Form>
    )
  }

  componentDidMount (){
  }
}
