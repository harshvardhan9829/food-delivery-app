import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oops something went wrong</h1>
            <h3>{error.status}</h3>
            <p>
                <i>{ error.statusText ||error.message}</i>
            </p>
        </div>
    )
}
export default Error