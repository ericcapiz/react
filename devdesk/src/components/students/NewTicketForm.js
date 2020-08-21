import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewTicketForm = () => {

    return (


        <Form  >

            <FormGroup>
            <Label htmlFor="title">
                Title
                <Input
                    id = "title"
                    type = "text"
                    name = "title"
                    placeholder = "Title goes here"
                    />
   
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor="description">
                Description
                <Input 
                    id = "description"
                    type = "text"
                    name = "description"
                    placeholder = "Describe your problem"
                    />

            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "effort">
                What I've tried
                <Input
                    id = "effort"
                    type = "text"
                    name = "effort"
                    placeholder = "What have you tried doing?"
         
                    />

            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor = "category">
                
                <select
                    id = "category"
                    name = "category">
                        <option>Pick a category</option>
                        <option value = "React">React</option>
                        <option value = "Back End">Back End</option>
                        <option value = "SASS">SASS</option>
                        </select>
            
            </Label>
            </FormGroup>

            <Button type = "submit" >
                Submit Ticket
            </Button>

        </Form>




    )

}

export default NewTicketForm