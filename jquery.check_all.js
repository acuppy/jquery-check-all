(function($){

  $.fn.checkAll = function(options){
    
    return this.each(function(){

      options = $.extend({
        checkboxAll: 'input.check-all[type="checkbox"]',
        checkbox:    'input[type="checkbox"]',
        onCheck:      null,
        onCheckAll:   null,
        onUnCheck:    null,
        onUnCheckAll: null,
        onUpdate:     null,
        onUpdateAll:  null
      }, options)

      var $container = $(this)

      $(options.checkbox).on('click', function(){
        var scope;
        if ( $(this).is(options.checkboxAll) ){
          
          var checked = $(this).prop('checked');
          $(options.checkbox, $container).each(function(){
            $(this).prop('checked', checked);
          });

          scope = 'all'
        
        } else {

          if( ! $(this, $container).is(':checked')){
            $(options.checkboxAll, $container).attr('checked', false);
          }
          scope = 'single'
        }

        runCallbacks.call(this, scope)
      });

      function runCallbacks(scope){
        if($(this).prop('checked') === true){
          var method = scope == 'all' ? 'onCheckAll' : 'onCheck'

          if(typeof options[method] == 'function'){
            options[method].call(this)
          }
        } else {
          
          var method = scope == 'all' ? 'onUnCheckAll' : 'onUnCheck'

          if(typeof options[method] == 'function'){
            options[method].call(this)
          }
        }

        var method = scope == 'all' ? 'onUpdateAll' : 'onUpdate'

        if(typeof options[method] == 'function'){
          options[method].call(this)
        }
      }
      
    });
  };

})(jQuery);
