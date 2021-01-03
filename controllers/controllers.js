const Blog=require('../model/model');

// find all blogs
exports.getall=(req,res)=>{
    
    Blog.find()
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((err)=>{
            if(err) res.status(500).json(err);
        });
}

// find single blog by id
exports.getone=(req,res)=>{

    Blog.findById(req.params.blogID)
        .then((data)=>{
            if(!data) return res.status(404).json({"mag":"Blog not found"});
            res.status(200).json(data);
        })
        .catch((err)=>{
            if(err) res.status(500).json(err);
        })

}



// create a blog
exports.create=(req,res)=>{

    const newblog=new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    //console.log(newblog);
    
    newblog.save().then((blog)=>{
        res.status(201).json({"msg":"created","blog":blog});
    }).catch((err)=>{
        if(err) return res.status(500).json(err);
    })
}

//to update a blog

exports.updateone=(req,res)=>{

    if(!req.body.title||!req.body.desc||!req.body.author)
        return res.status(500).json({"msg":"fill all the fields"});
    
    Blog.findByIdAndUpdate(req.params.blogID,{
        title: req.body.title,
        author:req.body.author,
        desc:req.body.desc
    },{new: true})
        .then((data)=>{
            if(!data) return res.status(404).json({"msg":"Not found"});
            res.status(202).json({
                "msg":"updated",
                "doc":data
            });
        })
        .catch((err)=>{
            if(err) res.status(500).json(err)
        })    
}