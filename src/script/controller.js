import { Model } from './model';
import { View } from './view';

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
}