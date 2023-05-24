import BaseApi from "../../BaseApi";
import { User } from "../resources/User";
import { USER_ROUTE } from "../routes/UserRoute";

export default class UserApi extends BaseApi<User> {
	/**	 * Standard CRUD	 */

	public Post = async (id: string, user: User) : Promise<void> => {
		await this.HttpPost(this.priorPath + USER_ROUTE, user);
	}
      
	public Patch = async (id: string, patch: User) : Promise<User> => {
		return await this.HttpPatch(this.priorPath + USER_ROUTE + "/" + id, patch);
	}

	public Delete = async (id: string) : Promise<void> => {
		await this.HttpDelete(this.priorPath + USER_ROUTE + "/" + id);
	}

	public GetAll = async () : Promise<Array<User>> => {
		return await this.HttpGetAll(this.priorPath + USER_ROUTE);
	}

	public Get = async (id: string) : Promise<User> => {
		return await this.HttpGet(this.priorPath + USER_ROUTE + "/" + id);
	}
}
