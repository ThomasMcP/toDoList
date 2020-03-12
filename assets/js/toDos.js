console.log("CONNECTED");

// Check off any 'to-do'
$("ul").on('click', 'li', function(){
  $(this).toggleClass('completed-to-do');
});

// Click on X to Delete 'to-do'
$("ul").on('click', 'span', function(e){
  $(this).parent().fadeOut(function() {
    this.remove();
  });
  e.stopPropagation();
})

// Add new 'to-do'
$("input[type='text']").keypress(function(e){
  if(e.which === 13) {
    let toDoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${toDoText}</li>`);
  }
})

// Toggle input with 'plus' logo
$( ".fa-plus" ).click(function() {
  $( "input[type='text']" ).fadeToggle();
});
