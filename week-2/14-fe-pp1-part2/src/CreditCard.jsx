import visaImg from "./assets/images/visa.png";
import masterImg from "./assets/images/master.png";

function CreditCard(props) {
    let url;
    if (props.type == "Visa") {
        url = visaImg;
    } else if (props.type == "Master Card") {
        url = masterImg;
    }
    const style = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    return (
        <div className="card" style={ style }>
            <div>
                <img src={url} alt="alt"/>
            </div>
            <div><b>•••• •••• •••• {props.number.slice(-4)}</b></div>
            <div className="details">
                <div>
                    <p>Expires {String(props.expirationMonth).padStart(2, '0')}/{String(props.expirationYear).slice(-2).padStart(2, '0')}</p>
                    <p>{props.bank}</p>
                </div>
                <p>{props.owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;
