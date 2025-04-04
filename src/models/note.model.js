import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      require: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", noteSchema);
