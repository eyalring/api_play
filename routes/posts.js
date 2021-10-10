
const express = require('express');
const app =express();
const router = express.Router();
const Post = require('../models/Post')


router.get('/' ,async (req,res) => {

    try{
        const posts = await Post.find();
        console.log(posts)
        res.json(posts);
    }catch(err){
        console.log('the error starts : ', err)
        console.log('the error ends ')
        res.json({message : err});
    }

    console.log(' we are running a middleware here')
})

router.get('/eyal' , (req,res) => {
    console.log(' we are running a eyal here')
    res.send('ala babala eyal')
})

router.get('/:postid' , async (req,res) => {
    console.log(req.params.postid)
    try{
        const postfound =  await Post.findById(req.params.postid)
        res.json(postfound)
    }catch(err){
        res.json({message : err});
    }
})

router.post('/',async (req,res) => {
   const post = new Post({
       title : req.body.title, 
       description : req.body.description
   })

   console.log('my post is ', post)

   try{
       const savedpost = await post.save();
       res.json(savedpost);
   } catch(err) {
       res.status(200).json(err);
   }

  
  
//   .then(data => {
//        console.log('i am ins uccess branch')
//        res.json(data);
//    }).catch(err => {
//     console.log('i am in failure branch error is : ',err)
//     res.json({message : err});
//    });

})

router.delete('/:postid' , async (req,res) => {
    try{
        const removedPost = await Post.remove({_id : req.params.postid});
        res.json(removedPost);
    }catch(err){
        console.log(err)
        res.json({message : err})
    }
});


router.patch('/:postid' , async (req,res) => {
    try{
    const updatedPost = await Post.updateOne({_id:req.params.postid} , 
        {$set { title : req.body.title}});
    res.json(updatedPost);
    }catch(err) {
        res.json({message : err})
    }
});

module.exports = router;