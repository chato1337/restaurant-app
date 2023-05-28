import { SETTINGS } from "@/config/config"
import { Table, TableDTO } from "@/models/table.model"
import axios, { AxiosResponse } from "axios"

const PATH = 'tables/'
export class TableService {
    static getTables = async () => {
        const res: AxiosResponse<Table[]> = await axios.get(SETTINGS.api + PATH)
        return res.data
    }

    static getTable = async (id: number) => {
        const res: AxiosResponse<Table[]> = await axios.get(`${SETTINGS.api}${PATH}?id=${id}`)
        return res.data
    }

    static createTable = async (table: TableDTO) => {
        const res: AxiosResponse<Table> = await axios.post(SETTINGS.api + PATH, table)
        return res.data
    }

    static updateTable = async (id: number, data: TableDTO) => {
        const res: AxiosResponse<Table> = await axios.put(SETTINGS.api + PATH + id, data)
        return res.data
    }
}