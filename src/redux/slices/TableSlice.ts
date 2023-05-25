import { Table } from "@/models/table.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface TableState {
    tables: Table[],
    tableSelected: Table | null
}

const initialState: TableState = {
    tables: [],
    tableSelected: null
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
        }
    }
})

export const {setTable, addTable, setTableSelected} = tableSlice.actions

export default tableSlice.reducer