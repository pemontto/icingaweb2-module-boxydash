
(function(Icinga) {

    var Boxydash = function(module) {
        this.module = module;

        this.initialize();

        this.openedFieldsets = {};

        this.module.icinga.logger.debug('Boxydash module loaded');
    };

    Boxydash.prototype = {
      initialize: function()
      {
        this.module.on('mouseenter', '.boxy_box.host', this.procHost);
        this.module.on('mouseenter', '.boxy_box.service', this.procService);
        this.module.on('mouseleave', '.boxy_box', this.procMouseOut);
        this.module.on('click', '.boxy_legend_box', this.legendClick);
      },

      procHost: function(ev) {
          var $el = $(ev.currentTarget);
          $( "#boxy_host" ).text($el.attr("title"));
      },

      procService: function(ev) {
          var $el = $(ev.currentTarget);
          $( "#boxy_host" ).text($el.attr("title").split('\n')[0].split(':')[0]);
          $( "#boxy_svc" ).text($el.attr("title").split('\n')[0].split(':')[1]);
      },

      procMouseOut: function (ev) {
          $( "#boxy_host" ).text(" ");
          $( "#boxy_svc" ).text(" ");
      },

      legendClick: function(ev) {
          var $el = $(ev.currentTarget);
          $( ".state." + $el.classes()[1]).toggle();
          $( ".boxy_legend_box." + $el.classes()[1]).toggleClass("off");
      }
    };

    Icinga.availableModules.boxydash = Boxydash;

}(Icinga));
