import React, { useState, useEffect } from 'react';
import dummyData from './dummyData';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import "./StudentDashboard.css";

const Search = () => {

    // const [searchTerm, setSearchTerm] = useState(""); 

    // const [searchResults, setSearchResults] = useState(dummyData)   
  
  
    // useEffect(() => {
  
    //   const results = dummyData.filter((item) => {
    //     return item.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase()) || item.title.toLowerCase().includes(searchTerm.toLowerCase())


    //   });
  
    //   setSearchResults(results)
    // }, [searchTerm]);
  
    // const handleChange = (event) => {
    //   setSearchTerm(event.target.value);
    // };


    return (

        <div>
        <Form>
        <FormGroup>
      <Label for="searchBar"></Label>
      <Input 
      type="text" 
      name="searchBar" 
      id="searchBar" 
      placeholder="Search"
    //   onChange={handleChange}
    //   value={searchTerm} 
      />
      </FormGroup>
      </Form>
      </div>




    )

}

export default Search;