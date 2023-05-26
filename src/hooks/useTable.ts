"use client"

import { TableDTO } from "@/models/table.model"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setGuest } from "@/redux/slices/OrderSlice"
import { setTable, setTableNumber, setTableSelected } from "@/redux/slices/TableSlice"
import { TableService } from "@/services/table.service"
import { FormEvent, useEffect } from "react"

export const useTable = (id: string | null = null) => {
    const dispatch = useAppDispatch()
    const tables = useAppSelector(state => state.TableReducer.tables)
    const tableNumber = useAppSelector(state => state.TableReducer.tableNumber)
    const tableSelected = useAppSelector(state => state.TableReducer.tableSelected)
    const currentTable = useAppSelector(state => state.TableReducer.tableSelected)
    const fetchTables = async () => {
        const res = await TableService.getTables()
        const castTables = res.documents as any
        dispatch(setTable(castTables))
    }
    const fetchTable = async () => {
        if (id) {
            const res = await TableService.getTable(Number(id))

            //if table dooes not exits
            if (res.documents.length === 0) {
                //create table in state
                const newTable: TableDTO = {
                    number: Number(id),
                    orders: [],
                    customers: 0,
                    total: 0
                }
                const createdTable = await TableService.createTable(newTable)
                dispatch(setTableSelected({...newTable, isActive: true, orders: [], id: createdTable.$id}))
            }

            //if table exist
            if (res.documents.length > 0) {
                const table = res.documents[0] as any
                dispatch(setTableSelected({...table, id: res.documents[0].$id}))
            }
        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.currentTarget.elements.namedItem("fullName") as HTMLInputElement
        if (input && id) {
            dispatch(setTableNumber(Number(id)))
            dispatch(setGuest(input.value))
        }
    }
    useEffect(() => {
        fetchTables()
        fetchTable()
    }, [])

    return {
        tables,
        handleSubmit,
        tableNumber,
        tableSelected,
        currentTable
    }
}