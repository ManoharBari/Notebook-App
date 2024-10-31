const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

const notesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  updateAt: Date,
});

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;
