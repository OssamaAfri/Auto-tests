import { assert } from 'chai';
import somme from './somme.js';

describe('Tests unitaires pour la fonction somme()', function() {

  it('Avec les valeurs de paramètres 3 et 6, la fonction somme() est sensée retourner la valeur 9', function() {
    assert.equal(somme(3, 6), 9);
  });

  it('Avec les valeurs de paramètres -2 et 7, la fonction somme() est sensée retourner la valeur 5', function() {
    assert.equal(somme(-2, 7), 5);
  });

  it('Avec les valeurs de paramètres "a" et 8, la fonction somme() est sensée lever une exception avec le message d\'erreur "paramètre invalide"', function() {
    assert.throws(() => somme("a", 8), Error, "paramètre invalide");
  });

});
