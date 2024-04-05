import React, { useState, useEffect } from 'react';
import { Codebase, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from 'axios';

// return a promise that queries the api/codebases endpoint
function getData() {
    return fetch("/api/codebases").then((res) => res.json());
}

export default function CodeTable() {
    const [data, setData] = useState<Codebase[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const fetchedData = await getData();
            const enhancedData = fetchedData.results.map((item: any, index: number) => ({
                ...item,
                onDelete: () => {
                    // Perform delete operation, like calling an API to delete the item
                    console.log(`Delete item with id: ${index}`);
                    const body = { id: item.id };
                    axios.delete(`/api/codebases/?id=${item.id}`).then(() => {
                        // Remove the item from the local state
                        setData((prevData) => prevData.filter((_, i) => i !== index));
                    }
                    ).catch((error) => {
                        console.error('Error deleting item:', error);
                    });
                    // You may need to refresh the data or remove the item from the local state
                },
                onEdit: () => {
                    // Perform edit operation, like opening a modal with the item's details
                    console.log(`Edit item with id: ${index}`);
                    // Implement the logic to edit the item
                },
            }));

            setData(enhancedData);
            setLoading(false);
        })();
    }, []);

    return (
        <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} loading={loading} />
        </div>
    );
}
