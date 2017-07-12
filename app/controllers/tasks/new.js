import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask: function(){

			var title = this.get('title')
			var description = this.get('description')
			var date = this.get('date')

			// create a new task
			var newTask = this.store.createRecord('task', {
				id: new Date().getTime(),
				title: title,
				description: description,
				dueDate: new Date(date)
			});

			newTask.save();

			this.setProperties({
				title: '',
				description: '',
				dueDate: ''
			});

		}
	}
});
