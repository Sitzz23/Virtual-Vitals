import {useEffect} from "react";
import './App.css';
import jwt_decode from "jwt-decode";

function App(){

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "57151448310-63udfqddo5b9fs72h1f034q2dadaaori.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    },[]);

    return(
        <div className="APP">
        <div id="signInDiv"></div>
        </div>
    );
}

export default App;