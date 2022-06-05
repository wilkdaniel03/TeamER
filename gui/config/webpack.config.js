const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, "../.env")})

const ExitWithMessage = (msg, tip) => {
  console.error(`Error: ${msg}\n${tip}`)
  process.exit(1)
}

if (process.env.MODE == undefined || process.env.PORT == undefined) {
  ExitWithMessage(
    "Cannot load environment variables.",
    `Try to check ${__filename} file.`
  )
}
