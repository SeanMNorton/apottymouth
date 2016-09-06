var reA = new RegExp(/(\b| )a /ig)

$("p, h1, h2, a, span, li").each(function(){
  var old = $(this).text()
  var fuckingMatch = old.match(reA)
  if (fuckingMatch){
    $(this).text(old.replace(reA, " " + fuckingMatch[0] + " fucking "))
  }
})
