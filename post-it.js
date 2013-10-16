var BoardView = function(el) {
  // Your board related code goes here
  var self = this;
  this.$el = el;
  this.postIts = [];

  this.$el.on('click', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var postIt = new PostItView(x,y);
    self.$el.append(postIt.$el);
    self
    // e.stopPropagation()
    // self.postIts.push(postIt);


  });
};

var PostItView = function(x, y) {
  this.render(x,y);
  this.$el.draggable({handle: '.header'});
  this.$el.find('a').on('click', this.closeWindow)
};

PostItView.prototype.closeWindow = function(e) {
  $(this).parents('div').remove();
  e.stopPropagation();
}

PostItView.prototype.render = function(x, y) {
  this.$el = $("<div class='post-it'><h3 class='header'><a href='#'>X</a></h3><p class='content'contenteditable='true'>Hello World</p></div>").css({left: x, top: y });;
  this.$el.on('click', function(e){
  e.stopPropagation();
  });

};

var boardView;
$(function() {
  // This code will run when the DOM has finished loading
  boardView = new BoardView($('#board'));
});

// beforeEach(function() {
//    var boardEl = $("<div></div>");
//    boardView = new BoardView(boardEl);

// })
