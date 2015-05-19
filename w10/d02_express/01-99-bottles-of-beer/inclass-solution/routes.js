module.exports = {
  index: function( req, res ){
    var numBottles = req.params.numBottles || 99
    var next = numBottles - 1
    res.render('index',{
      numBottles: parseInt(numBottles),
      next: next
    })
  }
}
