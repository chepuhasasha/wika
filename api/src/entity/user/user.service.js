export class UserService {
  constructor(userRepositoryInstance){
    this.repository = userRepositoryInstance;
  }

  async getUserById(id){
    return await this.repository.model.findByPk(id);
  }
}
