"use client"

import { TableDTO } from "@/models/table.model"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setGuest } from "@/redux/slices/OrderSlice"
import { setTable, setTableNumber, setTableSelected } from "@/redux/slices/TableSlice"
import { TableService } from "@/services/table.service"
import { FormEvent, useCallback, useEffect } from "react"

export const useTable = (id: string | null = null) => {
    const dispatch = useAppDispatch()
    const tables = useAppSelector(state => state.TableReducer.tables)
    const tableNumber = useAppSelector(state => state.TableReducer.tableNumber)
    const tableSelected = useAppSelector(state => state.TableReducer.tableSelected)
    const currentTable = useAppSelector(state => state.TableReducer.tableSelected)
    const fetchTable = useCallback(async () => {
        if (id) {
            const res = await TableService.getTable(Number(id))

            //if table dooes not exits
            if (res.length === 0) {
                //create table in state
                const newTable: TableDTO = {
                    number: Number(id),
                    customers: 0,
                    total: 0
                }
                const createdTable = await TableService.createTable(newTable)
                dispatch(setTableSelected(createdTable))
            }

            //if table exist
            if (res.length > 0) {
                const table = res[0]
                dispatch(setTableSelected(table))
            }
        }
    }, [id, dispatch])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.currentTarget.elements.namedItem("fullName") as HTMLInputElement
        if (input && id) {
            dispatch(setTableNumber(Number(id)))
            dispatch(setGuest(input.value))
        }
    }
    useEffect(() => {
        const fetchTables = async () => {
            const res = await TableService.getTables()
            dispatch(setTable(res))
        }
        fetchTables()
        fetchTable()
    }, [fetchTable, dispatch])

    return {
        tables,
        handleSubmit,
        tableNumber,
        tableSelected,
        currentTable
    }
}