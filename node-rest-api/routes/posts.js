const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

//Get back all the post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/specific", (req, res) => {
//   res.send("specific post");
// });

//submit  a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    // post.save();
    // .then(data =>{
    //     res.json(data);
    // })
    // .catch(err=>{
    //     res.json({message: err});
    // });

    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postId", async (req, res) => {
  //console.log(req.params,postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  //console.log(req.params,postId);
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
