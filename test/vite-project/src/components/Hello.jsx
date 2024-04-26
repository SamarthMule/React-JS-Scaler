// function Hello({props}){
// function Hello({name,phone}){
function Hello(props){
    // let text = "Samarth Mule"
    // function display(){
    //     return 'Hello from display function'
    // }
    return(
        <>
        {/* <h1>Hello from Hello component</h1>
        <h2>{text} {display()}</h2> */}

        {/* <h1>Hello {props.name} {props.phone} </h1> */}
        {/* <h1>Hello {name} {phone} </h1> */}
        <h1>Hello {props.name} {props.phone} </h1>
        </>
    )
}
export default Hello