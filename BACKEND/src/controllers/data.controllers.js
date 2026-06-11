const postModel = require("../models/blog.model");

/**
 * POST /api/data/create
 */
async function create(req,res) {
     const post = await postModel.create({
     tittle: req.body.tittle,
     content: req.body.content,
     category: req.body.category,
     author: req.body.author,
     date: req.body.date,
   });
   return res.status(201).json({
     mesage: "created succesfully"
   });
}

/**
 * GET /api/data/get
 */
async function get (req,res){
     const blogs = await postModel.find();

  return res.status(200).json({
    mesage: "blogs fetched sucessfully",
    blogs,
  });
}
module.exports = {create , get}