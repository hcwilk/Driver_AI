"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Codebase = {
    id: string
    name: string
    created: string
    owner: string
    url: string
    onEdit: (id: string) => void
    onDelete: (id: string) => void

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
    {
        id: 'edit',
        header: 'Edit',
        cell: ({ row }) => (
            <button
                type="button"
                onClick={() => row.original.onEdit(row.original.id)}
                className="text-blue-600 hover:underline"
            >
                Edit
            </button>
        ),
    },
    {
        id: 'delete',
        header: 'Delete',
        cell: ({ row }) => (
            <button
                type="button"
                onClick={() => row.original.onDelete(row.original.id)}
                className="text-red-600 hover:underline"
            >
                Delete
            </button>
        ),
    },
]
