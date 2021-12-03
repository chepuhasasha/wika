export class ArticleService {
  constructor(articleRepositoryInstance, projectRepositoryInstance){
    this.repository = articleRepositoryInstance;
    this.repository.model.belongsTo(projectRepositoryInstance.model, {
      as: 'project',
      targetKey: 'id',
      foreignKey: 'id'
    });
  }

  async findById(id){
    return await this.repository.model.findOne({
      where: {
        id
      },
      include: 'project'
    });
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

  async delete(obj){
    let result = null;
    let error = null;

    try {
      result = await this.repository.model.destroy({
        where: {
          ...obj
        }
      });
    } catch (e){
      error = e;
    }
    return {error, result};
  };

  async update(obj){
    let result = null;
    let error = null;

    if(!obj.update || !obj.where){
      error = 'Не указаны данные для поиска и обновления';
      return result;
    }

    try {
      result = await this.repository.model.update(obj.update, { where :obj.where });
    } catch (e){
      error = e;
    }

    if (result[0] === 0){
      error = ''
    }

    result = null;

    return {error, result};
  }
}
