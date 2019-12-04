import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""

        };
          }


        render() {
            return (
            <Form onSubmit={this.sends}>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="name">Имя пользователя</Label>
                    <Input type="text" name="name" id="name" placeholder="Ваш логин"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="name">Пароль</Label>
                    <Input type="password" name="pass" id="pass" placeholder="Ваш пароль"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col>
                  <Button>Submit</Button>
                </Col>
              </Row>
            </Form>
            );
        }

        sends=(e)=>{
            e.preventDefault();
            let cookie=`${key}=${val};expires=${date.toUTCString()}`;
            document.cookie = cookie;
            console.log(111);
        }



}
