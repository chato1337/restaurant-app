"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setTable } from "@/redux/slices/TableSlice"
import { TableService } from "@/services/table.service"
import { useEffect } from "react"

export const useTable = () => {
    const dispatch = useAppDispatch()
    const tables = useAppSelector(state => state.TableReducer.tables)
    const fetchTables = async () => {
        const res = await TableService.getTables()
        const castTables = res.documents as any
        dispatch(setTable(castTables))
    }
    useEffect(() => {
        fetchTables()
    }, [])

    return {
        tables
    }
}