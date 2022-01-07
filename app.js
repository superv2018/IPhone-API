const express = require("express");
const app = express();
const iphone = require('./routes/iphone')

const PORT = 8081;

app.set("port", process.env.PORT || PORT);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/iphone', iphone)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
