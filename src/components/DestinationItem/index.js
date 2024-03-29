import './index.css'

const DestinationItem = props => {
    const {destinationDetails} = props 
    const {imgUrl,name} = destinationDetails

    return(
        <div className="destination-item">
            <img src={imgUrl} alt={name} className="destination-image"/>
            <p className="destination-name">{name}</p>
        </div>
    )

}
export default DestinationItem;