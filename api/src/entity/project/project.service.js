export class ProjectService {
  constructor(projectRepositoryInstance){
    this.repository = projectRepositoryInstance;
  }

  async findById(id){
    return await this.repository.model.findByPk(id);
  }

  async create(obj){
    let result = null;
    let error = null;

    try {
      result = await this.repository.model.create(obj);
    } catch (e){
      error = e;
    }
    return {error, result};
  }

  // async delete(obj){
  //   // return await this.repository.create(obj);
  //   return null;
  // }
}
