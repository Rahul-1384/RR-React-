
function Items(props){
    const name = props.name;
    return(<div>
        <h1>{name}</h1>
        {props.children}
    </div>)
}
export default Items;