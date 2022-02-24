import React from 'react'
import dayjs from 'dayjs'

const Notification = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="pink-text">{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className="grey-text note-date">
                                       {dayjs(item.time).format('YYYY-MM-DD')}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;