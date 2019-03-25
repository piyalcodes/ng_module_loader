import { Injectable } from '@angular/core';

@Injectable()
export class SLClient {

  constructor() {

    console.log(":sdsds")
  }

  _get(url) {
    return url;
  }

  _post() { }

  _put() { }

  _delete() { }
}
