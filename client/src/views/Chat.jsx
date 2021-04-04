import React, {useState, useEffect, useRef} from 'react';
import "../App.css";
import io, { Socket } from 'socket.io-client'
import TextField from '@material-ui/core/TextField'


const Chat = () => {

    const [state, setState] = useState({message:'', name:''})
    const [chat, setChat] = useState([])
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current=io.connect("http://localhost:####%22")
        socketRef.current.on("message",({
            name,message })=>{ setChat([...chat, {name,message}]
                )}
            )
            return()=>socketRef.current.disconnect()
        }, [chat])
    

    const onTextChange = e =>{
        setState({...state, [e.target.name]: e.target.value})
    }

    const onMessageSubmit = e =>{
        const {name, message} = state
        Socket.current.emit('message', {name, message})
        e.preventDefault()
        setState({message: '', name})
    }

    const renderChat = () =>{
        return( chat.map(({name, message}, index) =>{
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        })
        )
    }

    return (
        <div className="card">
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div className="name-field">
                    <TextField name='name' onChange={e => onTextChange(e)} value={state.name} label="Name"/>
                </div>
                <div className="message">
                    <TextField name='message' onChange={e => onTextChange(e)} value={state.message} label="Message" variant="outlined" id="outlined-multiline-static"/>
                </div>
                <button>Send Message</button>
            </form>
          <div className="render-chat">
            <h1>Chat Log</h1>
            {renderChat()}
          </div>
        </div>
    );
};



export default Chat; 