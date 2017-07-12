import DS from 'ember-data';

export default DS.Model.extend({

	title: DS.attr('string'),
	description: DS.attr('string'),
	dueDate: DS.attr('date'),
	createdDate: DS.attr('date', {
		defaultValue: function(){
			return new Date();
		}
	})
});
