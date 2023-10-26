import { Repository, EntityTarget, DeepPartial } from 'typeorm';
import { GenericService } from './GenericService';

export class GenericServiceImpl<CreateDto, UpdateDto, Entity> implements GenericService<CreateDto, UpdateDto, Entity> {
  constructor(
    private readonly repository: Repository<Entity>,
  ) {}

  async add(item: CreateDto) {
    const entity = this.repository.create(item as DeepPartial<Entity>);
    return this.repository.save(entity);
  }
  async update(id: number, updatedItem: UpdateDto){
    // const partialUpdate = updatedItem as DeepPartial<Entity>;
    // return this.repository.update(id, partialUpdate);
  }

  async remove(id: number) {
    // Implement your remove logic here
  }

  // Implement other common methods here
}