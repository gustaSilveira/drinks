$(document).ready(function() {
    // Função para atualizar os detalhes do drink
    function updateDrinkDetails(drinkName, drinkImage, drinkIngredients) {
        $("#drink-name").text(drinkName);
        $("#drink-image").attr("src", drinkImage);
        $("#drink-ingredients").html(drinkIngredients);
    }

    // Função para salvar os drinks no armazenamento local
    function saveDrinksToLocalStorage(drinks) {
        localStorage.setItem("drinks", JSON.stringify(drinks));
    }

    // Função para carregar os drinks do armazenamento local
    function loadDrinksFromLocalStorage() {
        var drinks = localStorage.getItem("drinks");
        return drinks ? JSON.parse(drinks) : [];
    }

    // Inicializar a lista de drinks com os dados do armazenamento local
    var drinksList = loadDrinksFromLocalStorage();

    // Função para adicionar um novo drink à lista
    function addDrinkToList(drink) {
        drinksList.push(drink);
        saveDrinksToLocalStorage(drinksList);
    }

    // Atualizar a lista de drinks na inicialização
    function updateDrinkList() {
        $(".drink-menu").empty();
        drinksList.forEach(function(drink) {
            var newDrinkCard = $("<div>").addClass("drink-card").attr("data-drink", drink.name);
            newDrinkCard.append($("<img>").attr("src", drink.image).attr("alt", drink.name));
            newDrinkCard.append($("<h2>").text(drink.name));

            var ingredientsList = $("<ul>");
            drink.ingredients.forEach(function(ingredient) {
                ingredientsList.append($("<li>").text(ingredient.trim()));
            });
            newDrinkCard.append(ingredientsList);

            $(".drink-menu").append(newDrinkCard);
        });
    }

    // Evento de clique em um card de drink existente
    $(".drink-card").click(function() {
        var drinkName = $(this).data("drink");
        var drink = drinksList.find(function(item) {
            return item.name === drinkName;
        });

        if (drink) {
            updateDrinkDetails(drink.name, drink.image, drink.ingredients);
        }
    });

    // Evento de submissão do formulário para adicionar um novo drink
    $("#drink-form").submit(function(event) {
        event.preventDefault();

        // Obter valores do formulário
        var drinkName = $("#drink-name").val();
        var drinkImage = $("#drink-image-url").val();
        var drinkIngredients = $("#drink-ingredients").val().split(",");

        // Criar um novo drink
        var newDrink = {
            name: drinkName,
            image: drinkImage,
            ingredients: drinkIngredients
        };

        // Adicionar o novo drink à lista e atualizar a lista de drinks
        addDrinkToList(newDrink);
        updateDrinkList();

        // Limpar os campos do formulário
        $("#drink-name").val("");
        $("#drink-image-url").val("");
        $("#drink-ingredients").val("");
    });

    // Inicializar a lista de drinks na carga da página
    updateDrinkList();
});
