jQuery(function() {
jQuery('#create_customer').submit(function(event) {
  event.preventDefault();
  var data = jQuery(this).serialize();

 //create new account
  jQuery.post('/account', data)
    .done(function(data){
    var logErrors = jQuery(data).find('.errors').text();

    //if there are errors show them in the html form
    if (logErrors != "" && logErrors != 'undefined'){
        jQuery('#create_customer .errors').html(logErrors);
        jQuery('#create_customer .errors').show();

    //if account creation is successful show checkout page
    }else{
       console.log('success');
      document.location.href = '/pages/add-address';
    }
    }).fail(function(){console.log('error');});
   return false;
}); 
});