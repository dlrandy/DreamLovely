import { IUser } from "@Models/user/IUser";

export default class UserDTO implements IUser {
  public id?: number | undefined;
  public name: string = "";
  public username: string = "";
  public email: string = "";
  public address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  } = {
    city: "",
    geo: { lat: "", lng: "" },
    street: "",
    suite: "",
    zipcode: ""
  };
  public phone: string = "";
  public website: string = "";
  public company: {
    name: string;
    catchPhrase: string;
    bs: string;
  } = {
    bs: "",
    catchPhrase: "",
    name: ""
  };
}
