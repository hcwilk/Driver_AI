import React, { useState, useEffect } from 'react';
import { Codebase, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from 'axios';
import EditModal from '../modal/EditModal';



async function fetchData(setData: any, setLoading: any, handleEdit: any) {
    try {
        const response = await fetch("/api/codebases");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        const enhancedData = fetchedData.results.map((item: any) => {
            return {
                ...item,
                onDelete: async () => {
                    try {
                        await axios.delete(`/api/codebases/?id=${item.id}`);

                        fetchData(setData, setLoading, handleEdit);
                    } catch (error) {
                        console.error('Error deleting item:', error);
                    }
                },
                onEdit: () => {
                    handleEdit(item);
                },
            };
        });

        setData(enhancedData);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
    setLoading(false);
}


export default function CodeTable({ test, setTest }: any) {
    const [data, setData] = useState<Codebase[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentItemToEdit, setCurrentItemToEdit] = useState<Codebase | null>(null);

    const handleEdit = (item: Codebase) => {
        setCurrentItemToEdit(item);
        setIsEditModalOpen(true);
    };


    useEffect(() => {
        fetchData(setData, setLoading, handleEdit);
    }, [test]);

    return (
        <>
            <div className="container mx-auto py-5">

                <DataTable
                    columns={columns}
                    data={data}
                    loading={loading}
                    setLoading={setLoading}
                    setData={setData}
                    handleEdit={handleEdit}
                    fetchData={() => fetchData(setData, setLoading, handleEdit)}
                />
                <EditModal open={isEditModalOpen} setOpen={setIsEditModalOpen} data={currentItemToEdit} setTest={setTest} />
            </div>

        </>
    );
}
