export class ProjectService {
  constructor(projectRepositoryInstance){
    this.repository = projectRepositoryInstance;
  }

  async findById(id){
    return await this.repository.model.findByPk(id);
  }

  // async create(obj){
  //   // return await this.repository.create(obj);
  //   return null;
  // }

  // async delete(obj){
  //   // return await this.repository.create(obj);
  //   return null;
  // }
}
