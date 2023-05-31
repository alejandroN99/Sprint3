/**Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells.
 *  Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
 * També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge).
 * Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

import * as events from "events";
const eventEmitter = new events.EventEmitter();

export class Sport {
  subscriptors: Function[];
  constructor() {
    this.subscriptors = [];
  }

  addSubscribe(sub: Function) {
    this.subscriptors.push(sub);
  }

  unSubscribe(sub: Function) {
    this.subscriptors = this.subscriptors.filter((item) => item !== sub);
  };

  notify(event: string) {
    this.subscriptors.forEach((item) => {
      item.call(this, event);
    });
  }
}

const sport1 = new Sport();

function User1(issue: string) {
  console.log(`The issue of this week is: ${issue}`);
}

sport1.addSubscribe(User1);

eventEmitter.on("event", (issue : string) => {
  sport1.notify(issue);
});

eventEmitter.emit("event", "soccer");

