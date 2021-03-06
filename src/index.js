import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var data = [
  {message : 'Hi user' , createdAt : "2021-09-14T13:23:02.298Z", sender : 'agent', _id : 1 },
  {message : 'How are you doing today' , createdAt : "2021-09-14T13:23:02.298Z", sender : 'user', _id : 2 },
  {message : 'I am good, how about you' , createdAt : "2021-09-14T13:23:02.298Z", sender : 'agent', _id : 3 },
  {message : 'I am good, thanks for asking' , createdAt : "2021-09-14T13:23:02.298Z", sender : 'user', _id : 4 },
  {message : 'How can I help you today ?' , createdAt : "2021-09-14T13:23:02.298Z", sender : 'agent', _id : 5 },
];

ReactDOM.render(
    <App messages={data} />,
  document.getElementById('root')
);
