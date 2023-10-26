export interface GenericService<CreateDto, UpdateDto, Entity> {
    add(item: CreateDto);
    update(id: number, updatedItem: UpdateDto);
    remove(id: number);
    // Add other common methods here
  }