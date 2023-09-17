$(document).ready(function() {
    function updateDrinkDetails(drinkName, drinkImage, drinkIngredients) {
        $("#drink-name").text(drinkName);
        $("#drink-image").attr("src", drinkImage);
        $("#drink-ingredients").html(drinkIngredients);
    }

    $(".drink-card").click(function() {
        var drinkName = $(this).data("drink");
        var drinkImage = $(this).find("img").attr("src");
        var drinkIngredients = $(this).find("ul").html();

        updateDrinkDetails(drinkName, drinkImage, drinkIngredients);
    });

    $("#drink-form").submit(function(event) {
        event.preventDefault();

        var drinkName = $("#drink-name").val();
        var drinkImage = $("#drink-image-url").val();
        var drinkIngredients = $("#drink-ingredients").val().split(",");

        var newDrinkCard = $("<div>").addClass("drink-card").attr("data-drink", drinkName);
        newDrinkCard.append($("<img>").attr("src", drinkImage).attr("alt", drinkName));
        newDrinkCard.append($("<h2>").text(drinkName));

        var ingredientsList = $("<ul>");
        drinkIngredients.forEach(function(ingredient) {
            ingredientsList.append($("<li>").text(ingredient.trim()));
        });
        newDrinkCard.append(ingredientsList);

 
        $(".drink-menu").append(newDrinkCard);


        $("#drink-name").val("");
        $("#drink-image-url").val("");
        $("#drink-ingredients").val("");

        newDrinkCard.click(function() {
            var drinkName = $(this).data("drink");
            var drinkImage = $(this).find("img").attr("src");
            var drinkIngredients = $(this).find("ul").html();

            updateDrinkDetails(drinkName, drinkImage, drinkIngredients);
        });
    });
});
