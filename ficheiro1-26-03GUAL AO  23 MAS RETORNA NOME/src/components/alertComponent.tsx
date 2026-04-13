interface AlertComponentProps{
    username:string;
}

function AlertComponent({username}: AlertComponentProps) {
    return <p>{username}</p>;
}

export default AlertComponent;