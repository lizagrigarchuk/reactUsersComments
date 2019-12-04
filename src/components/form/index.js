import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            comment:""
        };
          }
      
    
        render() {
            return (
            <Form onSubmit={this.sends}>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail"/>
                </FormGroup>
                <FormGroup>
                <Label for="name">Name</Label>
                <Input type="textarea" name="name" id="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="comment">Comment</Label>
                    <Input type="textarea" name="comment" id="comment"/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            );
        }

        /*form_val(event) {
            this.state.filter((item)=>{
                item == event.target.name ? this.setState({value: event.target.value}) : null
            }
            )

            console.log(this.state);
            
        }*/

        sends=(e)=>{
            e.preventDefault();

            var obj ={
                name: document.getElementById("name").value,
                email: document.getElementById("exampleEmail").value,
                comment: document.getElementById("comment").value,
                like: 0,
                dislike: 0
            }
            console.log(obj);
        }

}