import PostDTO from '@Models/post/PostDTO'
export default class Post extends PostDTO {
  constructor(dto: PostDTO){
    super();
    Object.assign(this, dto);
  }
};
