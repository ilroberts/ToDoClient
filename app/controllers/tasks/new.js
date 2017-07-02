import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask: function(){

			alert('hello world');

			var title = this.get('title')
			var description = this.get('description')
			var date = this.get('date')

			// create a new task
			var newTask = this.store.createRecord('task', {
				title: title,
				description: description,
				date: new Date(date)
			});

			newTask.save();

			this.setProerties({
				title: '',
				description: '',
				date: ''
			});

		}
	}
});
