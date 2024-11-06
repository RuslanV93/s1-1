import SETTINGS from "./settings";
import {app} from "./app";

const PORT = SETTINGS.PORT
app.listen(PORT, () => {
  console.log(`server uses ${PORT} port.`)
})

