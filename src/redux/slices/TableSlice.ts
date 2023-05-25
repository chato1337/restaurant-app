import { Table } from "@/models/table.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface TableState {
    tables: Table[]
}

const initialState: TableState = {
    tables: []
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
        }
    }
})

export const {setTable, addTable} = tableSlice.actions

export default tableSlice.reducer