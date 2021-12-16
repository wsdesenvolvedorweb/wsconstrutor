const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const nodemailer = require("nodemailer")
const USERNAME = "wellingtoncgs30@gmail.com"
const PASSWORD = "bc3*_a@d16"
const port = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(helmet())

const mailer = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: USERNAME,
        pass: PASSWORD
    }
})

app.post("/contact", function(request, response) {
    mailer.sendMail(
        {
            from: [request.body.name] + " " + [request.body.email],
            replyTo: [request.body.name] + " " + [request.body.email],
            to: [USERNAME],
            subject: request.body.subject || "[Sem assunto]",
            html: request.body.message || "[Sem mensagem]"
        },
        function(error, info) {
            if(error) {
                console.log(error)
                return response.status(500).send(error)
            }
            response.status(200)
        }
    )
})

app.listen(port, () => {
    console.log("servidor em execução!".toUpperCase())
})