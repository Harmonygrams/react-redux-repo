import { Alert } from '@mui/material'
const Notification = ({type, message}) => {
    return(
        <Alert severity={type}>{message}</Alert>
    )
}
export default Notification 