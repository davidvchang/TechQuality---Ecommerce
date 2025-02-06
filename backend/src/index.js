import app from "./app.js";

import {openConnection} from './bd.js'

openConnection()

async function main() {
    await app.listen(app.get("Port"))
    console.log(`Server on port: ${app.get('Port')}`)
}

main()