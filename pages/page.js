import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Airtable from 'airtable'
import * as _ from 'lodash'

import EventCard from '../components/event-card';

class EventsPage extends React.Component {
    static async getInitialProps({ req }) {
        // TODO move to env vars 
        var appId = "appk955G7OpyoX5QS"; 
        var apiKey = "keyZH5kp6mTmvGz4B"; 
    
        const airtableBase = new Airtable({ apiKey }).base(appId);

        const eventsTable = airtableBase('Events');

        const allEvents = await eventsTable.select({ view: 'All Events' }).all();

    
        return {
            allEvents: allEvents,
        }
    }

    render() {
        const { allEvents } = this.props;
        console.log('allEvents:', allEvents);

        return (
            <div>
                <ol>{
                    _.map(
                        allEvents, 
                        (value, key) => {
                            return (
                                <EventCard event={value.fields}/>
                            )
                        }
                    )
                }</ol>
                <style jsx>{`
                            ol { 
                                list-style-type: none; 
                                margin: 0; 
                                padding: 0; 
                                display: flex; 
                                justify-content: center; 
                                flex-wrap: wrap; 
                            } 
                `}</style>
            </div>    
        )
    }
}

export default EventsPage