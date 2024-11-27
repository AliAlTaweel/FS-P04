const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", async (req, res, next) => {
  Blog.find({}).then((blogs) => res.json(blogs));
});

blogRouter.post("/", (req, res, next) => {
  const body = req.body;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((saveBlog) => {
      res.json(saveBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogRouter;
