import { collections, SETTINGS } from "@/config/config";
import { Client, Databases, ID, Query } from "appwrite";

const client = new Client();

export type AppwriteResponse<T> = {
    total: number;
    documents: T[];
}

client
	.setEndpoint(SETTINGS.awEndpoint) // Your API Endpoint
	.setProject(SETTINGS.awProject); // Your project ID

const databases = new Databases(client);

export async function getCollection(name: NameType) {
	const key = collections[name];
	const res = await databases.listDocuments(SETTINGS.awDb, key);
	return res;
}

export enum NameType {
	Table = "table",
	Order = "order",
	Product = "product"
}

export async function createDocument(
	name: NameType,
	data: any
) {
	const key = collections[name];
	const res = databases.createDocument(SETTINGS.awDb, key, ID.unique(), data);
	return res;
}

/** query: [key, value] */
export async function getDocument(
	query: { key: string; value: string | number },
	name: NameType
) {
	const key = collections[name];
	const res = await databases.listDocuments(SETTINGS.awDb, key, [
		Query.equal(query.key, query.value),
	]);
	return res;
}

export async function getDocumentById(id: string, name: NameType) {
	const key = collections[name]
	const res = await databases.getDocument(SETTINGS.awDb, key, id)
	return res

}

export async function updateDocument(id: string, name: "table" | "order" | "product", data: any) {
	const key = collections[name]
	const res = await databases.updateDocument(SETTINGS.awDb, key, id, data)
	return res
}
