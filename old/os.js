const os = require("os");
const cluster = require("cluster"); // Модуль нужен для того, чтобы однопоточному JS приложению использовать
// все возможности многоядерных систем и запускать дочерние процессы

// os.platform() // Позволяет получить текущую операционную систему
// os.arch() // Возвращает архитектуру процессора
// os.cpus() // Возвращает массив. Каждый объект массива - описания ядра процессора || .length - кол-во ядер

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`Worker with pid = ${worker.process.pid} is dead`);
//         if (code) {
//             cluster.fork();
//         } else {
//             console.log("Worker is dead")
//         }
//     })
// } else {
//     console.log(`Worker with pid = ${process.pid} running`);
//
//     setInterval(() => {
//
//     }, 5000)
// }
//
// const cpus = os.cpus();
//
// console.log(process.pid)

