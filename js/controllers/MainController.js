app.controller("MainController", ["$scope", function($scope) {
  $scope.today = new Date();
  
  $scope.appetizers = [
    {
      name: "Caprese",
      description: "Sliced mozzarella, tomatoes, and basil with a balsmaic glaze.",
      price: 4.95
    },
    {
      name: "Mozzarella Sticks",
      description: "Breaded and fried. Served with marinara sauce.",
      price: 3.95
    },
    {
    	name: "Bruschetta",
      description: "Grilled bread topped with garlic, tomatos, basil, and olice oil.",
      price: 4.95
    }
  ];
  
	$scope.mains = [
    {
 			name: "Pepperoni Pizza",
    	description: "Wood fired and topped with epperoni, marinara sauce, mozzerella, fresh oregano.",
      price: 7.95
    },
    { 
      name: "Pasta di Mare",
    	description: "Fettuccine in a garlic and white wine sauce with scallops, mussels, and shrimp.",
      price: 9.95
    },
    { 
      name: "Lasagna Bolognese",
    	description: "Layered with bolgnese sauce, italian sausage, ricotta, and parmigian.",
      price: 8.95
    },
    { 
      name: "Pasta Milano",
    	description: "Penne with roasted chicken, sun-dried tomatoes, mushroom, and garlic in a cream sauce.",
      price: 8.95
    }
  ];
    
	$scope.extras = [
    {
 			name: "Brussel Sprouts",
    	description: "Sauteed with onion, garlic, and sage in browned butter.",
      price: 3.95
    },
    { 
      name: "Asparagus",
    	description: "Grilled with olive oil, black pepper and topped with asiago.",
      price: 3.95
    }
 	];
}]);