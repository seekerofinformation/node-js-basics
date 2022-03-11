// STREAM !== THREAD

// Readable - read
// Writable - write
// Duplex - For read and write
// Transform - Same as Duplex, but could change data while reading

// If we want to read some big file (5GB) and we use File System for it, we will read the whole file,
// it will took some time to finish reading process.
// For example we want to send this file and we can't send it before we finish reading process.
// In this case we better use Streams. Because we will read the file piece by piece. Read piece - send it
//  Default piece size is 64Kb
// But we can read not only files. It can be some network delivery, downloading

const fs = require("fs");
const path = require("path");
const stream = require("stream");

// fs.readFile(path.resolve(__dirname, "events.js"), (err, data) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, "events.js"), {encoding: "utf-8"})
//
// stream.on("data", (chunk) => {
//     console.log(chunk)
// })
//
// stream.on("end", () => console.log("End reading"))
// stream.on("open", () => console.log("Start reading"))
// stream.on("error", (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, "test2.txt"))
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + "\n")
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on("error")

// const http = require("http");
//
// http.createServer((req, res) => {
//     // req - readable stream
//     // res - writable stream
//
//     const stream = fs.createWriteStream(path.resolve(__dirname, "test.txt"))
//
//     // If we want user to download some file, we can't end this stream because speed of reading this file is bigger than download
//     // For this case was made method called .pipe()
//     // In this case we are syncing readable and writable stream
//     // Readable stream would not start read new piece of file, before writable ends write previous
//     stream.pipe(res)
// })