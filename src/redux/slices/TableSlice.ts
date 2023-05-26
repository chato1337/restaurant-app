import { Table } from "@/models/table.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface TableState {
    tables: Table[],
    tableSelected: Table | null,
    tableNumber: number
}

const initialState: TableState = {
    tables: [],
    tableSelected: null,
    tableNumber: 0
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTable: (state, action: PayloadAction<Table[]>) => {
            state.tables = action.payload
        },
        addTable: (state, action: PayloadAction<Table>) => {
            state.tables = [...state.tables, action.payload]
        },
        setTableSelected: (state, action: PayloadAction<Table | null>) => {
            state.tableSelected = action.payload
        },
        setTableNumber: (state, action: PayloadAction<number>) => {
            state.tableNumber = action.payload
        }
    }
})

export const {setTable, addTable, setTableSelected, setTableNumber} = tableSlice.actions

export default tableSlice.reducer