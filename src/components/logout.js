import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout() {

    const onSuccess = () => {
        console.log("Log out successfull");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;