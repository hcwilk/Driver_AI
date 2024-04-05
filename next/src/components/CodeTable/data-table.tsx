"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import axios from "axios"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect } from "react"
import { set } from "firebase/database"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    setData?: any
    loading?: boolean
    setLoading?: any
    fetchData?: any
}

export function DataTable<TData, TValue>({
    columns,
    data,
    setData,
    loading,
    setLoading
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    // const fetchData = async () => {
    //     const fetchedData: any = await fetch("/api/codebases")
    //     const enhancedData = fetchedData.results.map((item: any, index: number) => ({
    //         ...item,
    //         onDelete: () => {
    //             // Perform delete operation, like calling an API to delete the item
    //             console.log(`Delete item with id: ${index}`);
    //             const body = { id: item.id };
    //             axios.delete(`/api/codebases/?id=${item.id}`).then(() => {
    //                 // Remove the item from the local state
    //                 setData((prevData: any) => prevData.filter((_: any, i: any) => i !== index));
    //             }
    //             ).catch((error) => {
    //                 console.error('Error deleting item:', error);
    //             });
    //             // You may need to refresh the data or remove the item from the local state
    //         },
    //         onEdit: () => {
    //             // Perform edit operation, like opening a modal with the item's details
    //             console.log(`Edit item with id: ${index}`);
    //             // Implement the logic to edit the item
    //         },
    //     }));

    //     setData(enhancedData);
    //     setLoading(false);
    // }



    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                {loading ?
                                    <>
                                        Loading...
                                    </>
                                    :
                                    <>
                                        No results.
                                    </>
                                }

                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
