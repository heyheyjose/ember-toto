Todos.Router.map(function () {
	this.resource('todos', { path: '/' }, function () {
		// additional child routes will be put here later
	});
});

Todos.TodosIndexRoute = Ember.Route.extend({

	model: function () {
		return this.modelFor('todos');
	}

});