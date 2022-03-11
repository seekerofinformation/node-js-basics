const path = require("path");

path.join(__dirname, "first", "second", "third") // Позволяет склеить несколько участков пути вне зависимости от Операционной системы
// __dirname - строка, которая содержит абсолютный путь к текущей директории
// __filename - строка, которая содержит путь к текущему файлу

const fullpath = path.resolve("first") // То же, что и join, только путь всегда абсолютный
console.log("Parse", path.parse(fullpath)) // { root: C:\\, dir: "", base: "filename.js", ext: ".js", name: "filename" }
console.log(path.sep);
console.log(path.isAbsolute("first/second"));
console.log(path.basename(fullpath));
console.log(path.extname(fullpath));

// =====================================

const siteURL = "http://localhost:8080/users?id=5123"

const url = new URL(siteURL);

console.log(url);
