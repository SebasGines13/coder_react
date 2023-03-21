
export const Login = () => {
    let name = "Pep"

    const greeting = ()=>{
        console.log("Hi, how are you?")
    }

    return <div style={{backgroundColor: "steelblue"}}>
        <h1>HHi from component login!</h1>
        <h3>Mi name is {name}</h3>
        <button onClick={greeting}>Say Hi</button>
    </div> 
}