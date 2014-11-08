Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function () {
			// get the todo title set by the 'new todo' text field
			var title = this.get('newTitle');
			if (!title) { return false; }
			if (!title.trim()) { return; }

			// create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// clear the 'new todo' text field
			this.set('newTitle', '');

			// save the new model
			todo.save();
		}
	}
});