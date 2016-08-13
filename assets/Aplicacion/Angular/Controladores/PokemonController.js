aplicacion.controller('PokemonCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.listaDePokemones = [];
  $scope.pokemon = {};

  leer();

  function leer() {
    $http({
      method: 'GET',
      url: 'http://localhost:1337/Pokemon'
    }).then(
      function success(respuesta) {
        $scope.listaDePokemones = respuesta.data;
      },
      function error(error) {
        console.log(error);
      });
  }

  $scope.registrar = function() {
    $http({
      method: 'POST',
      url: 'http://localhost:1337/Pokemon',
      data: $scope.pokemon
    }).then(
      function success(respuesta) {
        $scope.listaDePokemones.push(respuesta.data);
        $scope.pokemon = {};
      },
      function error(error) {
        console.log(error);
      });
  }

  $scope.actualizar = function(pokemon, indice) {
    $http({
      method: 'PUT',
      url: 'http://localhost:1337/Pokemon/' + pokemon.id,
      data: pokemon
    }).then(
      function success(respuesta) {
        $scope.listaDePokemones[indice] = respuesta.data;
      },
      function error(error) {
        console.log(error);
      });
  }

  $scope.borrar = function(pokemon, indice) {
    $http({
      method: 'DELETE',
      url: 'http://localhost:1337/Pokemon/' + pokemon.id,
    }).then(
      function success(respuesta) {
        $scope.listaDePokemones.splice(indice, 1);
      },
      function error(error) {
        console.log(error);
      });
  }
}]);
