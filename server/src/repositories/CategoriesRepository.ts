import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

import AppError from '../errors/AppError';

interface CategoryFields {
  title: string | undefined;
  type: 'Answer' | 'Question';
}

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findOneOrCreate({ title, type }: CategoryFields): Promise<Category> {
    let category: Category;

    if (!title) {
      title = `Generic ${type}`;
    }

    const findCategory = await this.findOne({
      where: {
        title,
      },
    });

    if (findCategory) {
      category = findCategory;
    } else {
      const newCategory = this.create({
        title,
      });

      await this.save(newCategory);

      category = newCategory;
    }

    return category;
  }
}

export default CategoriesRepository;
