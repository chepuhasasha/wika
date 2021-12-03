export class ProjectService {
  constructor(projectRepositoryInstance,articleRepositoryInstance, courseRepositoryInstance, testRepositoryInstance){
    this.repository = projectRepositoryInstance;
    this.repository.model.hasMany(articleRepositoryInstance.model, {
      as: 'articles',
      targetKey: 'project',
      foreignKey: 'id'
    });
    this.repository.model.hasMany(courseRepositoryInstance.model, {
      as: 'courses',
      targetKey: 'project',
      foreignKey: 'id'
    });
    this.repository.model.hasMany(testRepositoryInstance.model, {
      as: 'tests',
      targetKey: 'project',
      foreignKey: 'id'
    });
  }

  async findById(id){
    return await this.repository.model.findOne({
      where: {
        id: id
      },
      include: ['articles','courses','tests']
    });
  };

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
    } else {
      result = null;
    }

    return {error, result};
  }
}
