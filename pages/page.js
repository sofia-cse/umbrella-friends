import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Airtable from 'airtable'
import * as _ from 'lodash'

class HelloUA extends React.Component {
    static async getInitialProps({ req }) {
        // TODO move to env vars 
        var appId = "appk955G7OpyoX5QS"; 
        var apiKey = "keyZH5kp6mTmvGz4B"; 
    
        const airtableBase = new Airtable({ apiKey }).base(appId);

        const eventsTable = airtableBase('Events');

        const allEvents = await eventsTable.select({ view: 'All Events' }).all();

        console.log('All evts:', allEvents);
    
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