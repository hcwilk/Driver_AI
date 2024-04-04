import React, { useState, useEffect } from 'react';
import { Codebase, columns } from "./columns";
import { DataTable } from "./data-table";

// return a promise that queries the api/codebases endpoint
function getData() {
    return fetch("/api/codebases").then((res) => res.json());
}

export default function CodeTable() {
    const [data, setData] = useState<Codebase[]>([]);

    useEffect(() => {
        (async () => {
            const fetchedData = await getData();
            console.log('fetched', fetchedData);
            setData(fetchedData.results);
        })();
    }, []);

    return (
        <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
