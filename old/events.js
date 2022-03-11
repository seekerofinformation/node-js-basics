const Emitter = require("events");

const emmiter = new Emitter();

emmiter.on("message", (data, second, third) => {
    console.log("You sent a message " + data)
    console.log("Second arg " + second)
})

// Если событие необходимо сгенерировать единожды - использовать emitter.once
// emitter.removeAllListeners - удалять все слушатели
// emitter.removeListener("listenerName", callback) - удалять конкретный слушатель

const MESSAGE = process.env.message || "";

if (MESSAGE) {
    emmiter.emit("message", MESSAGE, 123)
} else {
    emmiter.emit("message", "You should enter your message")
}

// Когда удобно использовать?
// При создании http серверов, при обмене сообщениями, когда нужно сгенерировать какое-то событие на какое-то определенное действие
// , в вебсокетах, кластеризаций