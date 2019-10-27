import Button from 'react-bootstrap/Button';

const EventCard = (props) => {
    const { event } = props;
    return (
        <div id="eventCard">
        {event.Event_Flyer && <img src={event.Event_Flyer[0].url} />}
        <div id="eventInfo">
            <li>{event.Name}</li>
            <Button variant="primary">Buy Tickets</Button>
        </div>
        <style jsx>{`
        #eventCard {
            width: 335px;
            background: #FFF;
            border-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 0px;
            padding-bottom: 15px;
            text-align: left;
            margin: 50px;
        }
        img {
            width: 100%;
        }
        #eventInfo{
            padding: 20px;
        }
      
        `}
        </style>
        </div>
    )
}

export default EventCard