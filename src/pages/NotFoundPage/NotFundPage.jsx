import React from 'react';
import {Link} from "react-router-dom";

const NotFundPage = () => {
    return (
        <div>
            <h1>page NOT found go to <Link to={'/'}>home page</Link></h1>
        </div>
    );
};

export default NotFundPage;