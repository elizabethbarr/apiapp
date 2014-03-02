//router.js

var MainRouter = Backbone.Router.extend({
  routes: {
    "shops" : "showShops",
    "shops/:keyword" : "showShops"
  },
 
  initialize: function(){
    this.items = new ItemsCollection;
    this.items.on('add', function(item){
      new ItemView({model: item})
    })
  },
 
  showShops: function(keyword){
    if (keyword) {
      this.items.url = "https://api.etsy.com/v2/listings/active.js?keywords="+ keyword +"&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus&callback=?"
    }
    this.items.fetch();
  }
});
 

 //item-view.js
var ItemView = Backbone.View.extend({
  initialize: function(){
    $('.jumbotron').append(this.el);
    this.render()
  },
  render: function(){
    this.$el.html(this.model.get('title') + '<img class="col-md-3 col-xs-12" src="'+ this.model.attributes.Images[0].url_fullxfull +'">')
  }
})
 

 //item.js
var Item = Backbone.Model.extend({});
var ItemsCollection = Backbone.Collection.extend({
  model: Item,
  url: "https://api.etsy.com/v2/listings/active.js?api_key=kr9rjq7dc9c24jv6fccq2hus&includes=Images&callback=?",
 
  parse: function(response) {
    return response.results;
  }
})