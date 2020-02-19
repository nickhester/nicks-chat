require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
// app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const port = process.env.PORT || 8080;

app.get('/conversation', function (req, res) {
 return res.send(conversationStore[0]);
});

app.post('/conversation', function (req, res) {
  handleReceiveNewMessage(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

function handleReceiveNewMessage(message) {
  let newMessageList = conversationStore[0].messages.slice();
  newMessageList.push(message);
  conversationStore[0].messages = newMessageList;
}

let conversationStore = [
  {
    id: 0,
    messages: [
      // {
      //   text: 'first message node',
      //   author: 'nick'
      // }
    ]
  }
];