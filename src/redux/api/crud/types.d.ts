/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace CRUD {
	type GetCrudRequest = void;
	type GetCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];

	type CreateCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	type CreateCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
    export type DeleteCrudResponse = {
		_id? :number;
		firstName : string;
	}
	export type DeleteCrudRequest = {
		_id? : number;
		firstName:string;
	}[];
		export type EditCrudRequest = {
		_id?: number;
		firstName: string;
		lastName: string;
	};
	export type EditCrudResponse = {
		_id?: number;
		firstName: string;
		lastName: string;
	}[];
}
