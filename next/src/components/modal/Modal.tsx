import { set } from "firebase/database"
import { useState } from "react"

export default function Modal({ open, setOpen, setTest }: { open: boolean, setOpen: any, setTest: any }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const codebase = { name, owner, url, description }
        await fetch("/api/codebases", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(codebase)
        })
        setOpen(false)
        setTest((prev: any) => prev + 1)
    }

    return (
        <>
            {open ?
                <>
                    <div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-40 w-full h-screen ">
                        <div className="fixed inset-0 z-50 flex justify-center items-center">
                            <div className="relative p-4 w-full max-w-2xl h-auto">

                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Add New Codebase
                                        </h3>
                                        <button type="button" onClick={() => { setOpen(false) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-2 md:p-3 space-y-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-2">
                                                <label className="mb-2.5 block font-medium text-black dark:black">
                                                    Name
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:black dark:focus:border-primary"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />

                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="mb-2.5 block font-medium text-black dark:black">
                                                    Owner
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:black dark:focus:border-primary"
                                                        value={owner}
                                                        onChange={(e) => setOwner(e.target.value)}
                                                    />

                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="mb-2.5 block font-medium text-black dark:black">
                                                    Description
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:black dark:focus:border-primary"
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    />

                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="mb-2.5 block font-medium text-black dark:black">
                                                    URL
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:black dark:focus:border-primary"
                                                        value={url}
                                                        onChange={(e) => setUrl(e.target.value)}
                                                    />

                                                </div>
                                            </div>


                                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 w-full justify-center">
                                                <button data-modal-hide="default-modal" type="submit" className="hover:text-white w-1/2 cursor-pointer rounded-lg border border-primary bg-gradient-to-br from-zinc-100 to-zinc-500 p-4 text-black transition-all duration-300 ease-in-out hover:bg-gradient-to-bl hover:from-zinc-500 hover:to-zinc-700">Submit</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
                :
                <>

                </>
            }



        </>
    )
}