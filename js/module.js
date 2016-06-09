var module = {

  props: {
    select: $('select'),
    addTask: $('input[name="ctl00$PageContent$btnAddJobTask"]')
  },

  init: function() {
    /**
     * @function init
     */
    this.props.select.select2();
    this.props.select.on('select2:select', this.change.bind(this));
    this.props.addTask.on('click', this.destroy.bind(this));
  },
  
  change: function(e) {
    /**
     * @function change
     * @param {e} Event
     */
    $(e.target)[0].dispatchEvent(new Event('change'));
  },

  destroy: function() {
    /**
     * @function destroy
     */
    this.props.select.select2('destroy');
    this.props.select.select2();
  }
};

module.init();
