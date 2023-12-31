import React from 'react';
import {auth} from '../firebase'
import "./Message.css"

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? (<div className='sent'>{message.text}</div>)
  : <p className='received'></p>

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className="name">{message.name}</p>
        <div className='text-cont'>
        <p className='text'>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;