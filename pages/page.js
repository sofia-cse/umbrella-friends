import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import axios from 'axios'
import * as _ from 'lodash'

class HelloUA extends React.Component {
    static async getInitialProps({ req }) {
        console.log('Im rendering')                         
        // Init variables 
        var app_id = "appk955G7OpyoX5QS"; 
        var app_key = "keyZH5kp6mTmvGz4B"; 
        // this.events = [] 
        console.log("1")
        const { data: { records: allEvents } } = await axios.get(
            "https://api.airtable.com/v0/"+app_id+"/Events?view=All%20Events", 
            {  
                headers: { Authorization: "Bearer "+app_key }  
            } 
        )
    
        return {
            allEvents: allEvents,
        }
    }

    render() {
        const { allEvents } = this.props;
        console.log('allEvents:', allEvents);

        return (
            <ol>{
                _.map(
                    allEvents, 
                    (value, key) => {
                        return (<li key={key}>{value.fields.Name}</li>)
                    }
                )
            }</ol>
        )
    }
}

export default HelloUA