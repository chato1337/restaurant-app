import { Table, TableDTO } from "@/models/table.model"
import { createDocument, getCollection, getDocument, NameType, updateDocument } from "@/utils/appwrite"

export class TableService {
    static getTables = async () => {
        return await getCollection(NameType.Table)
    }

    static getTable = async (id: number) => {
        return await getDocument({ key: 'number', value: id }, NameType.Table)
    }

    static createTable = async (table: TableDTO) => {
        return await createDocument(NameType.Table, table)
    }

    static updateTable = async (id: string, data: TableDTO) => {
        return await updateDocument(id, NameType.Table, data)
    }
}