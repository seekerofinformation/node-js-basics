const fs = require("fs");
const path = require("path");
const {text} = require("express");

// Есть синхронные методы и асинхронные. Синхронные блокируют главный поток и код выполнятся не будет,
// пока не будет завершено событие, асинхронные - нет

// Создает папку. Если попытаться создать существующую папку, получим ошибку.
// Если передать доп. аргументы в функцию, можно создать дополнительно вложенные папки, но по умолчанию
// Нода не может создавать рекурсивно папки, поэтому вторым параметром необходимо передать
// {recursive: true}  обьект опций
// mkdirSync - sync
// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2"), {recursive: true})

// async
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     console.log("Directory was created")
// })

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, "test.txt"), "5 qweqwrwe 12 123", (err) => {
//     if (err) {
//         throw err;
//     }
//
//     console.log("File was created")
    // fs.appendFile(path.resolve(__dirname, "test.txt"), "Added to the END", (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     console.log("File was created")
    // })
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
        if (err) {
            return reject(err.message)
        }

        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path,  (err) => {
        if (err) {
            return reject(err.message)
        }

        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//     .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"),"123"))
//     .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"),"123"))
//     .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"),"123"))
//     .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//     .then(data => console.log(data))
// .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, "test.txt"))
//     .then(() => console.log("File was removed"))

// const text = process.env.TEXT || "";
//
// writeFileAsync(path.resolve(__dirname, "test.txt"), text)
//     .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//     .then(data => data.split(" ").length)
//     .then(count => writeFileAsync(path.resolve(__dirname, "count.txt"), count))
//     .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")))