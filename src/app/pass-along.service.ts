import { Injectable } from '@angular/core';
import { Woloszym } from "./woloszym"
import { loginName } from "src/assets/data/woloszymData"
import java from

@Injectable({
  providedIn: 'root'
})

export class PassAlongService {

  constructor() { }

  getWoloszymData(): Woloszym{
    return loginName;
  }
}
