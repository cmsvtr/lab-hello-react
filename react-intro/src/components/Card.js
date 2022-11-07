function Card (props) {
return (

    <div>
        <img src={props.icon} alt="Icon"/>
        <h3>{props.titlecard}</h3>
        <p>{props.textcard}</p>
    </div>

)

}

export default Card