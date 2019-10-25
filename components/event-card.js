const EventCard = (props) => {
    const { event } = props;
    return (
        <div id="eventCard">
        {event.Event_Flyer && <img src={event.Event_Flyer[0].url} />}
        <li>{event.Name}</li>
        <button>Buy Tickets</button>
        <style jsx>{`
        #eventCard {
            width: 335px;
            background: #FFF;
            border-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            padding: 0px;
            padding-bottom: 15px;
            text-align: center;
            margin: 50px;
        }
        img {
            width: 100%;
        }
        `}
        </style>
        </div>
    )
}

export default EventCard