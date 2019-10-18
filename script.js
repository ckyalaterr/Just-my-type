$(document).ready(function() {
  $("#keyboard-upper-container").hide();
  $(document).keydown(function(e) {
    if (e.which === 16) {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();
    } else {
       $(`#${e.key.charCodeAt(0)}`).addClass("highlight");
    }
  });

  $(document).keyup(function(e) {
    if (e.which === 16) {
    $("#keyboard-upper-container").hide();
    $("#keyboard-lower-container").show();
    } else{
    $(`span`).removeClass("highlight");
    $("div").removeClass("highlight");
  };
});



let sentences = [
'ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot',
'oat itain oat tain nate eate tea anne inant nean',
'itant eate anot eat nato inate eat anot tain eat',
'nee ene ate ite tent tiet ent ine ene ete ene ate'
];

let sentence0 = sentences[0].toString();
let sentence1 = sentences[1].toString();
let sentence2 = sentences[2].toString();
let sentence3 = sentences[3].toString();
let sentence4 = sentences[4].toString();


  $("#sentence").append("<p></p>").text(sentence0);
  $("#target-letter").append("<p></p>").text(sentence0[0])
    $(document).keypress(function(e) {
   if(e.key === sentence0[0]) {
    $("#yellow-block").css( "left", "+=18" )
    $("#feedback").
   }
  });

})
//   $("#sentence").replaceWith("<p></p>").text(sentences[1]);
//   $("#sentence").replaceWith("<p></p>").text(sentences[2]);
//   $("#sentence").replaceWith("<p></p>").text(sentences[3]);
//   $("#sentence").replaceWith("<p></p>").text(sentences[4]);