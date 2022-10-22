import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div></div>
            <img src={props.avatar} className={s.messageImg} alt={"Avatar"}/>
            <div className={s.wrapper}>
                <p className={s.name}>{props.name}</p>
                <span className={s.messageM}>{props.message}</span>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
