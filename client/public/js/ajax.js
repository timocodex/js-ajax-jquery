function randomin(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/color',
    success: function(data) {
      var num = Math.floor(Math.random()*9)
      $(`#${num}`).css('background-color',data)
    },
    error: function(error) {
      console.log(error);
    }
  });
}
