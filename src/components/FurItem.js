import './FurItem.css';
function FurItem(props){
    const {fur} = props;
    return(
        <div className="fur-item">
           <img src={fur.thumbnailURL} /> 
           <h4>{fur.title}</h4>
        </div>
    );
}

export default FurItem;