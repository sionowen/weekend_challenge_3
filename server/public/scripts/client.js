$(document).on('ready', function(){

  $('.inputButton').on('click', function(){
    event.preventDefault();
    var values = {};
    $.each($('#calculator').serializeArray(), function(i, field){
      values[field.name] = field.value;

    });
    values.operation = this.name;
    console.log(values);

    $.ajax({
      type: 'POST',
      url: '/operation/' + values.operation,
      data: values,
      success: function(response){
        console.log(response);
        $('.result').text(response);
      }
    })
  })
  $('.clearForm').on('click', function(){
    event.preventDefault();
    $('#calculator').trigger("reset");

  })

})
