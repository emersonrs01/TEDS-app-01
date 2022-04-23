const mongoose = require("mongoose");
const uri = "mongodb://admin:admin@localhost:27018/atividade?authSource=atividade";
mongoose.connect(uri, {});