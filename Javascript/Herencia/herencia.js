//Super Clase
class Animal {
  constructor(patas, ojos, vertebrado, skin) {
    this.patas = patas;
    this.ojos = ojos;
    this.vertebrado = vertebrado;
    this.skin = skin;
  }

  dormir() {
    return 'Zzzzz';
  }

  comer() {
    return 'Estoy comiendo, que rico!';
  }

  reproducirse() {
    return 'Me estoy reproduciendo';
  }
}

// Subclase
class Spider extends Animal {
  constructor(patas, ojos, vertebrado, skin, type) {
    super(patas, ojos, vertebrado, skin);
    this.type = type;
  }

  tejer() {
    return 'estoy tejiendo';
  }
}

const spiderman = new Spider(8, 32, true, 'Peluda', 'Tarantula');

console.log(spiderman.dormir())
