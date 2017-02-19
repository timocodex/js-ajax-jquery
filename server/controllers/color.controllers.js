var Color = require('../models/color')

module.exports = {
  create: function(req,res){
    var newColor = new Color({
      colors:[]
    })
    newColor.save(function(err){
      if(err){
        res.json(err)
      }
      else{
        res.json(newColor)
      }
    })
  },
  add: function(req,res){
    Color.find().then(function(result){
      result[0].colors.push(req.body.color)
      result[0].markModified('colors')
      result[0].save(function(err){
        if(err){
          res.json(err)
        }
        else{
          res.json(result[0])
        }
      })
    })
  },
  getRandom: function(req,res){
    Color.find().then(function(result){
      var color = result[0].colors
      var length = color.length
      var random = color[Math.floor(Math.random()*length)]
      res.send(random)
    })
  },
  show: function(req,res){
    Color.find().then(function(result){
      res.send(result)
    })
  }
}
