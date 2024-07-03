type Props = {
    text : string;
    link : string;
    title : string;
}
export default function BeautifulA(props : Props){
    return(
        
        <div className="a">
            <a href={props.link}>{props.text}</a>
            <img src="map.png" style={{width : "20px", height : "20px", display : "inline"}} title={props.title}></img>
        </div>
        
    )
}
