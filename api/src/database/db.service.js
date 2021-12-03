import { Sequelize } from "sequelize";

export class DbService{
  constructor(config){
    this.db = new Sequelize({...config});
  }
}
