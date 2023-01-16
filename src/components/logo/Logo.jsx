
const  Logo = ({ type }) =>{
    return (
        <img src = {type==='muted'?'../images/logo-muted.svg':'../images/logo.svg'}/>
    )
}

export default Logo