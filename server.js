const { instrument } = require("@socket.io/admin-ui");

// ***** Admin Panel *****
/*
1. Go to:
    https://admin.socket.io/
2. Login with
    http://localhost:3000
3. Volla done!

 */

const io = require("socket.io")(3000, {
    cors: {
        origin: ["http://localhost:5173", "https://admin.socket.io"],
        credentials: true,
    },
})


io.on('connection', (socket) => {
    console.log(socket.id);

    // Place Actor
    socket.on("send-actor-placement", (jsondata) => {
        //console.log(`json inhalt: ${jsondata}`)
        socket.broadcast.emit("receive-actor-placement", jsondata)
    })

    // Remove Actor
    socket.on("send-actor-remove", (jsondata) => {
        //console.log(`json inhalt: ${jsondata}`)
        socket.broadcast.emit("receive-actor-remove", jsondata)
    })


})

instrument(io, {
    auth: false,
    mode: "development",
});



