import './FurPost.css';
function FurPost(props){
    const{fur} = props;
    return(
        <div className="furPost">
            <div className="furPost-bg"/>
            <div className="furPost-content">
                <img src={fur.thumbnailUrl}/>
                <h4>{fur.title}</h4>
            </div>
        </div>
    );
}

export default FurPost ;