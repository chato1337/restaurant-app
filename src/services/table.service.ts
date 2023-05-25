import { Table, TableDTO } from "@/models/table.model"
import { createDocument, getCollection, getDocument, updateDocument } from "@/utils/appwrite"

export class TableService {
    static getTables = async () => {
        return await getCollection('table')
    }

    static getTable = async (id: number) => {
        return await getDocument({ key: 'number', value: id }, 'table')
    }

    static createTable = async (table: TableDTO) => {
        return await createDocument('table', table)
    }

    static updateTable = async (id: string, data: TableDTO) => {
        return await updateDocument(id, 'table', data)
    }
}