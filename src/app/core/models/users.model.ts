export class UserModel {
    id?: number;
    name?: string;
    lasr_name?: string;
    mail?: string;
  
    constructor(user: Partial<UserModel>) {
      Object.assign(this, user);
    }
  }
  