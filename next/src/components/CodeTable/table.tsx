import React, { useState, useEffect } from 'react';
import { Codebase, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from 'axios';

// Function to fetch data from the api/codebases endpoint
async function fetchData(setData: any, setLoading: any) {
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
                    // Perform delete operation
                    console.log(`Delete item with id: ${item.id}`);
                    try {
                        await axios.delete(`/api/codebases/?id=${item.id}`);
                        // After deletion, refetch data
                        fetchData(setData, setLoading);
                    } catch (error) {
                        console.error('Error deleting item:', error);
                    }
                },
                onEdit: () => {
                    // Perform edit operation
                    console.log(`Edit item with id: ${item.id}`);
                    // After editing, you would likely want to refetch data here as well
                },
            };
        });

        setData(enhancedData);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
    setLoading(false);
}

export default function CodeTable({ test }: any) {
    const [data, setData] = useState<Codebase[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Fetching data...");
        fetchData(setData, setLoading);
    }, [test]); // Empty dependency array ensures this effect runs once on mount

    // Pass down the fetchData function to the DataTable so it can refetch when needed
    return (
        <div className="container mx-auto py-5">
            <DataTable
                columns={columns}
                data={data}
                loading={loading}
                setLoading={setLoading}
                setData={setData}
                fetchData={() => fetchData(setData, setLoading)} // Pass this as a prop to DataTable
            />
        </div>
    );
}
