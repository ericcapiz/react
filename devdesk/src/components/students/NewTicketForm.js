import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./StudentDashboard.css";
import StudentNav from './StudentNav';

const NewTicketForm = () => {

    return (

        <div>

            <StudentNav />

        <div className="newTicketForm">

            <h2>Create your new ticket.</h2>


        <Form className="newTicketFormGroup" >

            <FormGroup>
            <Label htmlFor="title" xs={4}>
                <Input
                    id = "title"
                    type = "text"
                    name = "title"
                    placeholder = "Title goes here"
                    />
   
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor="description" xs={4}>
                <Input 
                    id = "description"
                    type = "text"
                    name = "description"
                    placeholder = "Describe your problem"
                    />

            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "effort" xs={4}>
                <Input
                    id = "effort"
                    type = "text"
                    name = "effort"
                    placeholder = "What have you tried doing?"
         
                    />

            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "category" className="dropDownNewTicket"> 
                
                <select
                    id = "category"
                    name = "category">
                        <option>Pick a category</option>
                        <option value = "React">React</option>
                        <option value = "Back End">Back End</option>
                        <option value = "SASS">SASS</option>
                        <option value = "Animation">Animation</option>
                        </select>
            
            </Label>
            </FormGroup>

            <Button type = "submit" className="newTicketSubmitButton">
                Submit Ticket
            </Button>

        </Form>

        </div>

        </div>



    )

}

export default NewTicketForm