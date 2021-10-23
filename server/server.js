const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const requestEndpoint = 'https://api.jdoodle.com/execute';

// Server var ------------
let latestCodeVersion;
let countClient = 0;
let rooms = [];

// API ------------
app.get('/latest-code', (req, res) => {
  console.log('lates-code called');
  if (latestCodeVersion) {
    res.json({ code: latestCodeVersion.code });
  } else {
    res.json({ code: 'empty-code' });
  }
});

app.post('/compile', async (req, res) => {
  axios
    .post(requestEndpoint, req.body)
    .then((response) => res.json(response.data));
});

// SOCKET -------------------
io.on('connection', (socket) => {
  countClient++;
  console.log(`New client connected ${socket.id} : number = ${countClient}`);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    countClient--;
    if (countClient === 0) {
      io.emit('code-unlocked', { uuid: 'server' });
    }
  });

  socket.on('join_room', (roomcode) => {
    socket.join(roomcode);
    console.log('ROOM created ' + roomcode);
    rooms.push(roomcode);
  });

  socket.on('code', (data) => {
    io.to(data.roomid).emit('get-code', data.newcode);
    console.log(data);
  });

  socket.on('update-code', (msg) => {
    console.log('update-code event');
    latestCodeVersion = msg;
    io.emit('update-code', msg);
  });

  socket.on('code-locked', (msg) => {
    console.log('code-locked event');
    io.emit('code-locked', msg);
  });

  socket.on('code-unlocked', (msg) => {
    console.log('code-unlocked event');
    io.emit('code-unlocked', msg);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
