var main = function(){
	"use strict"
	$(".nav").on("click", "a", function(){
		$("a").toggleClass("selected");
		$("#klantenzone,#beheer").toggleClass("onzichtbaar");
	});
	$(".vakantie").on("click", ".delete", function(){
		$(this).parent().remove();
	}).on("click", "button", function(){
		var $prijs = $("<p>").text("Uw prijs: "+ $(this).data("prijs"));
		$(this).closest(".vakantie").append($prijs);
		$(this).remove();
	});
	$("#beheer").on("click", "button", function(){
		var $btnDelete = $("<button>").text("x").addClass("delete");
		var $bestemming = $("<h2>").text($("#best").val());
		var $afbeelding = $("<img>").attr("src", $("#afb").val())
			.attr("alt", $("#best").val());
		var $beschrijving = $("<p>").text($("#beschr").val());
		var $prijs = $("<button>").text("Ontdek hier uw prijs")
			.attr("data-prijs", $("#pr").val());
			
			//construeer nieuwe vakantiebestemming
		var $vakantiebestemming = $("<div>").append($btnDelete)
			.append($bestemming).append($afbeelding)
			.append($beschrijving).append($prijs);
			$vakantiebestemming.addClass("vakantie")
			.on("click", ".delete", function(){
			$(this).parent().remove();
			}).on("click", "button", function(){
			var $prijs = $("<p>").text("Uw prijs: "+ $(this).data("prijs"));
			$(this).closest(".vakantie").append($prijs);
			$(this).remove();
		});
		$("#klantenzone .aanbiedingen").append($vakantiebestemming);
		$("input").val("");
	});
}
$(document).ready(main);