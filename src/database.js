var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://user:1234@cluster0.ffmbb.mongodb.net/TEST?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
