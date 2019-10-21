const EventCard = (props) => {
    const { event } = props;
    return (
        <li>{event.Name}</li>
    )
}

export default EventCard