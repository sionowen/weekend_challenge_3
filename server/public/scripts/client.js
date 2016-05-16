var values = {};

$(document).on('ready', function() {
	$('button').on('click', function() {
		event.preventDefault();
	});

  $('.numSelector').on('click', function(){
    var addText = $(this).text();
    console.log(addText);
    $('#displayedNum').val($('#displayedNum').val() + addText);
  });

	$('.inputButton').on('click', function() {
		event.preventDefault();
    values.firstNum = $('#displayedNum').val();
		values.operation = this.name;
    $('#displayedNum').val('');
		console.log(values);
	})

  $('.equalButton').on('click', function(){
    event.preventDefault();
    values.secondNum = $('#displayedNum').val();
    console.log(values);
    $.ajax({
      type: 'POST',
      url: '/operation/' + values.operation,
      data: values,
      success: function(response) {
        console.log(response);
        $('#displayedNum').val(response);
      }
    });
  })

	$('.clearForm').on('click', function() {
		event.preventDefault();
		$('#calculator').trigger("reset");
    values = {};
	})

})
