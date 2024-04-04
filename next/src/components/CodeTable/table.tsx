import React, { useState, useEffect } from 'react';
import { Codebase, columns } from "./columns";
import { DataTable } from "./data-table";

function getData() {
    return Promise.resolve([
        {
            name: "Codebase 1",
            created: "2022-01-01",
            owner: "Alice",
            url: "https://example.com/codebase-1",
        },
    ]);
}

export default function CodeTable() {
    const [data, setData] = useState<Codebase[]>([]);

    useEffect(() => {
        (async () => {
            const fetchedData = await getData();
            setData(fetchedData);
        })();
    }, []);

    return (
        <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
