import { IPost } from '@Models/Post/IPost'

export default class PostDTO implements IPost {
  public userId: string = '';
  public id: string = '';
  public title: string = '';
  public body: string = '';

}

