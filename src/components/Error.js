import {useRouteError} from "react-router-dom"
const Error = ()=> {
    const error = useRouteError();
    return (<>OOps something went wrong!! {error.status}</>);    
}

export default Error;