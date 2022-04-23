const mongoose = require("mongoose");
const atividadeSchema = new mongoose.Schema({   
    nome: { type: String, required: true, unique: true },
    data: { type: Date, required: true },
    status: { type: String, required: true}
});
module.exports = mongoose.model("atividade", atividadeSchema);  