import React from "react";
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div>
            <div className="notification">
                <div className="notiglow"></div>
    <div class="notititle">Newsletter</div>

                <div className="input-group">
                        <input type="email" className="input" id="Email" name="Email" placeholder="chedi@chedi.tn" autoComplete="off" />
                        <input className="button--submit" value="Subscribe" type="submit" />
                    </div>
            </div>
        </div>
    );
};  

export default Newsletter;
