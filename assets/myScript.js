var date = $("#currentDay");
var hour = moment().hours();

$("#save").click(function  () {
  $("input[type='text']").each( function () {
    var save = $(this).attr('id');
    var data = $(this).value();
    localStorage.setItem(save, data);
  });
})
$("input[type='text']").each( function () {
  var id = $(this).attr('id');
  var savedData = localStorage.getItem(id);
  id.value = savedData;
});

$(document).ready(function () {
  $('label').each((element) => {
    var id = $('label')[element].id;
    var checkTime = parseInt($("#" + id).attr("for"));

    if (checkTime < hour) {
      $("#" + id).addClass("past");
    } else if (checkTime === hour) {
      $("#" + id).addClass("present");
    } else {
      $("#" + id).addClass("future");
    }
  });
});
