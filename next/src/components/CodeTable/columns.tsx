"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Codebase = {
    name: string
    created: string
    owner: string
    url: string

}

export const columns: ColumnDef<Codebase>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "created",
        header: "Created",
    },
    {
        accessorKey: "owner",
        header: "Owner",
    },
    {
        accessorKey: "url",
        header: "URL",
    },
]
