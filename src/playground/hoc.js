// higher order component  HOC
// a react component that renders another component
// reuse code
// render hijacking

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>HOC info</h1>
        <p>The info is: {props.info}</p>
        <p>is Admin?: {props.isAdmin ? "true" : "false"}</p>
    </div>
);

const withAdminWarning = (WrappedCompnent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedCompnent {...props}/>
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);




const requireAuthentication = (WrappedCompnent) => {
    return (props) => (
        <div>
        {!props.isAuthorized ? <p>Please log in</p> : <WrappedCompnent {...props} />}
        
        </div>
    );
};
const Authorize = requireAuthentication(Info);



ReactDOM.render(<Authorize isAuthorized={false} />,document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details" />,document.getElementById('app'));