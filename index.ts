import * as fs from "fs";
import * as http from "http";

// const http = require('http')
// const fs = require('fs')

const bunServer = http.createServer((req: http.IncomingMessage,res: http.ServerResponse) => {
    //  to process incoming request
    // console.log(req.headers)
    // console.log(req)

    const log = `${Date.now()} : ${req.url} New request received\n`

    fs.appendFile('log.txt', log, (err: string,data: any) => {
        switch(req.url) {
        //     case "/" :
        //          res.status(200).json(req.user);("HomePage");
        //         break;
        //     case "/about" :
        //         res.send("About");
        //         break;
        //     default :
        //         res.send("404 not found")
        // }
        case "/":
                res.writeHead(200, { 'Content-Type': 'text/json' });
                res.end(JSON.stringify({ message: "HomePage" }));
                break;
            case "/about":
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end("About");
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("404 not found");
    }
        
    })
    
})

bunServer.listen(8000, () => {
    console.log("Server started")
} )