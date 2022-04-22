const Ws = require('ws');

;((Ws) => {
  const server = new Ws.Server({
    port: 8000
  })

  const init = () => {
    bindEvent();
  }

  function bindEvent() {
    server.on('open', handleOpen);
    server.on('close', handleColse);
    server.on('error', handleError);
    server.on('connection', handleConnection);
  }

  function handleOpen() {
    console.log('WebSocket open');
  }

  function handleColse() {
    console.log('WebSocket close');
  }

  function handleError() {
    console.log('WebSocket error');
  }

  function handleConnection(ws) {
    console.log('WebSocket connection');

    ws.on('message', handleMessage)
  }

  function handleMessage(msg) {
    server.clients.forEach(function (c) {
      c.send(msg.toString());
    })
  }

  init();
})(Ws);