function somme(nombre1 = 0, nombre2 = 0) {
    if (typeof nombre1 !== 'number' || typeof nombre2 !== 'number') {
      throw new Error('paramètre invalide');
    }
    return nombre1 + nombre2;
  }
  
  export default somme;
  