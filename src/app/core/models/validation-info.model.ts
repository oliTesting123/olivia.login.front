export class ValidationInfoModel {
    Success: boolean;
    Message: string
  
    constructor(validationInfo: Partial<ValidationInfoModel>) {
      Object.assign(this, validationInfo);
    }
  }
  