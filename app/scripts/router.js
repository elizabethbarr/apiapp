var MainRouter = Backbone.Router.extend({


	routes: {
		"about"       : "aboutPage",
		"about/:name" : "aboutPage"
	},

	initialize: function(){
		console.log('Hey guys, a router is born!');
	},

	aboutPage: function(name){
		if (name) {
			console.log('Heres a page about', name)
		} else {
			console.log('BOOM! Youre at the Generic About Page (bitches)!')
		}
	}

});






var MainRouter = Backbone.Router.extend({


  //ROUTES MUST START WITH NO SLASH
  routes: {
    "" : "listView",
    'items/:id' : 'itemView'
  },

  initialize: function() {
    // console.log('the router is born');
  },

  listView: function(){
    $('.list-viewer').empty();
    etsyItems.each(function(item){
      new ListView({model: item});      
    })
  },

  itemView: function(id) {
    // if(id && etsyItems){
      
      var item = etsyItems.find(function(item){
        return item.get('listing_id') == id;
      });

      // console.log('switched to viewing item number', id, 'model       ', item);
      new ItemView({model: item});

    }
  // }
});



//today

var MainRouter = Backbone.Router.extend({

	routes: {
		"shops"  :   "showShops"
	},

	initialize: function(){
		console.log('Hey there');

		this.items = new ItemsCollection;

		this.items.on('add', function(item){
			new ItemView({model: item})
		})		
	},

	showShops: function(name){
			this.items.fetch();


	}
});

var ItemView = Backbone.View.extend({

	initialize: function(){
		$('.jumbotron').append(this.el)

		this.render()
	},
	
	render: function(){
		this.$el.html(this.model.get('shop_name'))
		
	}

});

//create Item and ItemsCollection constructors

var Item = Backbone.Model.extend({});
var ItemsCollection = Backbone.Collection.extend({
	model: Item,
	url: "https://api.etsy.com ....",

	parse: function(response) {
		this.count = response.count
		return response.results;
	}


})


//today

//or

