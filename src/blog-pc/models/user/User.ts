import UserDTO from '@Models/user/UserDTO'
export default class User extends UserDTO {
  constructor(dto: UserDTO){
    super();
    Object.assign(this, dto);
  }
};
