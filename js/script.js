function hideSections() { $("section").hide(); }
function showSection(s) { $(s).show(); }

$(document).ready(function(){

  hideSections();
  showSection("#welcome");
  
  $("a").click(function(e){
    hideSections();
    const section = $(this).attr('href');
    showSection(section);
  });

});