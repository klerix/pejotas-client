var Marionette = require('backbone.marionette')

module.exports = Marionette.CollectionView.extend({
  className: 'row',

  childView: require('./ClassItemView'),
  childViewOptions: function () {
    return {
      choosable: this.options.choosable,
      eventId: this.options.eventId
    }
  },

  emptyView: require('../../common/empty/EmptyView'),
  emptyViewOptions: function () {
    return {
      item: this.options.item || 'clases'
    }
  }
})
