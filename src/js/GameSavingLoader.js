import read from './reader';
import json from './parser';

class GameSaving {
  constructor({ id, created, userInfo }) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data)) 
      .then((parsedData) => {
        const savingData = JSON.parse(parsedData); 
        return new GameSaving(savingData);
      });
  }
}
