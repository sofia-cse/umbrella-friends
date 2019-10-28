import React from 'react'
import Head from 'next/head'
import Airtable from 'airtable'
import * as _ from 'lodash'
import TopNav from '../components/top-nav'


import EventCard from '../components/event-card';

class EventsPage extends React.Component {
    static async getInitialProps({ req }) {
        // TODO move to env vars 
        var appId = "appk955G7OpyoX5QS"; 
        var apiKey = "keyZH5kp6mTmvGz4B"; 
    
        const airtableBase = new Airtable({ apiKey }).base(appId);

        const eventsTable = airtableBase('Events');

        const pastEvents = await eventsTable.select({ view: 'Past AUF Events' }).all();

    
        return {
            pastEvents: pastEvents,
        }
    }

    render() {
        const { pastEvents } = this.props;

        return (
            <div>
                <Head>
                    <title>Events</title>
                    <link rel='icon' href='/favicon.ico' />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    />
                </Head>
                <TopNav />
                <div>
                    <h1 className='title'>Past Events</h1>
                    <ol>{
                        _.map(
                            pastEvents, 
                            (value, key) => {
                                return (
                                    <EventCard event={value.fields}/>
                                )
                            }
                        )
                    }</ol>
                </div>
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