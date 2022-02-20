import React from "react";

const ContactCard = (props) => {
        const {id, name, email} = props.contact;
    return(
        <div className="item">
                <div className="content">
                    <div className="header"style={{color: "black", padding: "10px"}}>{name}</div>
                    <div style={{color: "green", padding: "10px"}}>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color: "red", padding: "10px"}}></i>
            </div>
    );

};

export default ContactCard;