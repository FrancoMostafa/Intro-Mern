const moongose = require("mongoose");
const { appConfig } = require("../config");
const Schema = moongose.Schema;
const ProductSchema = Schema(
  {
    nombre: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

ProductSchema.methods.setImgUrl = function setImgUrl() {
  const { host, port } = appConfig;
  this.imgUrl = `${host}:${port}/public/${filename}`;
};

module.exports = moongose.model("Products", ProductSchema);
