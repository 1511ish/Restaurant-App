import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}></div>
            <Card className="model">
                <header className="header">
                    {/* <h2>{props.title}</h2> */}
                    <h2>Invalid Input</h2>
                </header>
                <div className="content">
                    {/* <p>{props.message}</p> */}
                    <p>plese enter valid input.</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
