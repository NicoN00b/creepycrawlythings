$(document).ready(function() {
  $("input:radio[name=animal]").change(function () {
    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === 'snakes') {
      $("#arachnids, #frogsandtoads, #sharks").hide();
      $('#snakes').show();
    } else if (animal === 'arachnids'){
      $("#snakes, #frogsandtoads, #sharks").hide();
      $('#arachnids').show();
    } else if (animal === 'frogsandtoads'){
      $("#snakes, #arachnids, #sharks").hide();
      $('#frogsandtoads').show();
    } else {
      $("#snakes, #arachnids, #frogsandtoads").hide();
      $('#sharks').show();
    }
  })
});
