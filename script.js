$(document).ready(function() {
    // Função para atualizar os detalhes do drink
    function updateDrinkDetails(drinkName, drinkImage, drinkIngredients) {
        $("#drink-name").text(drinkName);
        $("#drink-image").attr("src", drinkImage);
        $("#drink-ingredients").html(drinkIngredients);
    }

    // Lista de drinks
    var drinksList = [
        {
            name: "Margarita",
            image: "margarita.jpg",
            ingredients: [
                "50ml de Tequila",
                "30ml de Suco de Limão",
                "20ml de Triple Sec",
                "Gelo",
                "Sal para a borda do copo"
            ]
        },
        {
            name: "Mojito",
            image: "mojito.jpg",
            ingredients: [
                "50ml de Rum",
                "30ml de Suco de Limão",
                "15ml de Xarope de Açúcar",
                "Folhas de Hortelã",
                "Gelo"
            ]
        },
        // Adicione mais drinks aqui
    ];

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
});
