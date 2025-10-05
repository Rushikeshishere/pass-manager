import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import mongoose from 'mongoose'

const Manager = () => {

    const ref = useRef()
    const [form, setForm] = useState({ url: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {f
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {

        const togglePassword = () => setShow(!show);

        if (ref.current.src.includes('icons/eyecross.png')) {
            ref.current.src = 'icons/eyeopen.png'
            togglePassword()
        } else if (ref.current.src.includes('icons/eyeopen.png')) {
            ref.current.src = 'icons/eyecross.png'
            togglePassword()
        }

    }

    const savePassword = () => {

        if (!form.url || !form.username || !form.password) {
            toast.error('Please fill in all fields!');
            return;
        }

        let uuid = uuidv4()

        setPasswordArray([...passwordArray, { ...form, id: uuid }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuid }]))

        setForm({ url: "", username: "", password: "" })

        toast('Password saved successfully!')

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyToClipboard = (text, e) => {

        navigator.clipboard.writeText(text);
        e.target.src = 'icons/copied.png'
        setTimeout(() => {
            e.target.src = 'icons/copy.png'
        }, 1000);

        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    }

    const deletePassword = (id) => {

        const filteredPasswords = passwordArray.filter(item => item.id !== id)
        setPasswordArray(filteredPasswords)
        localStorage.setItem("passwords", JSON.stringify(filteredPasswords))

        toast('Deleted successfully!')

    }

    const editPassword = (id) => {

        // Find the password entry that matches the clicked row
        const passwordToEdit = passwordArray.find(item => item.id === id);

        if (passwordToEdit) {
            deletePassword(passwordToEdit.id); // Remove the old entry from the list

            // Fill the form fields with the selected entry’s details
            setForm({
                url: passwordToEdit.url,
                username: passwordToEdit.username,
                password: passwordToEdit.password
            });

            toast.info("You can now edit and save the updated password.", {
                position: "top-right",
                autoClose: 2000,
                theme: "light",
            });
        }

    };


    return (
        
        <>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-8">
                <div className="max-w-230 mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">Password Manager</h2>
                        <p className="text-slate-600">Securely store and manage your passwords</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-200">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-2xl font-semibold text-slate-800">Add New Password</h2>
                            <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                                <img src="icons/search.png" alt="search" className="w-6 h-6 mr-2" />
                                <input
                                    type="text"
                                    className="flex-1 outline-none"
                                    placeholder="Search passwords..."
                                    onChange={(e) => {
                                        let value = e.target.value.toLowerCase();
                                        let filteredPasswords = JSON.parse(localStorage.getItem("passwords")).filter(item => item.url.toLowerCase().includes(value) || item.username.toLowerCase().includes(value) || item.password.toLowerCase().includes(value));
                                        setPasswordArray(filteredPasswords);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
                                <input
                                    value={form.url}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                    name="url"
                                    id="url"
                                    placeholder='https://example.com'
                                />
                            </div>
                            <div className='flex h-13 items-center gap-5'>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                                <div className="flex">
                                    <input
                                        value={form.username}
                                        onChange={handleChange}
                                        type="text"
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                        name="username"
                                        id="username"
                                        placeholder='Enter your username'
                                    />
                                </div>
                                <div className='flex h-13 items-center gap-5'>
                                    <label className="block text-sm font-medium text-slate-700 mb-2 mt-5">Password</label>

                                    <div className="flex gap-3 items-center cursor-pointer">
                                        <input
                                            value={form.password}
                                            onChange={handleChange}
                                            type={show ? "text" : "password"}
                                            className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
                                            name="password"
                                            id="password"
                                            placeholder='Enter your password'
                                        />
                                        <span>
                                            <img
                                                src="../../icons/eyecross.png"
                                                ref={ref}
                                                onClick={showPassword}
                                                className='w-20'
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={savePassword} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                Save Password
                            </button>
                        </div>

                        <div className="passwords">
                            <h2 className="mt-6 text-2xl font-semibold text-slate-800 mb-6">Your Passwords</h2>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left table-auto text-gray-800 dark:text-gray-800">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2">Website URL</th>
                                            <th className="border px-4 py-2">Username</th>
                                            <th className="border px-4 py-2">Password</th>
                                            <th className="border px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwordArray.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border px-4 py-2">
                                                    <div className='flex justify-between items-center'>
                                                        {item.url}
                                                        <img src="icons/copy.png" onClick={(e) => copyToClipboard(item.url, e)} alt="copy" className='w-6 cursor-pointer' />
                                                    </div>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <div className='flex justify-between items-center'>
                                                        {item.username}
                                                        <img src="icons/copy.png" onClick={(e) => copyToClipboard(item.username, e)} alt="copy" className='w-6 cursor-pointer' />
                                                    </div>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <div className='flex justify-between items-center'>
                                                        {item.password}
                                                        <img src={"icons/copy.png"} onClick={(e) => copyToClipboard(item.password, e)} alt="copy" className='w-6 cursor-pointer' />
                                                    </div>
                                                </td>
                                                <td className="border px-3 py-2">
                                                    <div className='flex flex-col justify-center items-center gap-2'>
                                                        <div onClick={() => editPassword(item.id)} className='flex items-center gap-1 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-2 py-1 rounded-lg text-xs font-medium transition-all'>
                                                            <span>Edit</span>
                                                            <img src="icons/edit.gif" alt="edit" className='w-6 cursor-pointer px-1' />
                                                        </div>
                                                        <div onClick={() => deletePassword(item.id)} className='flex items-center gap-1 cursor-pointer bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-2 py-1 rounded-lg text-xs font-medium transition-all'>
                                                            <span>Delete</span>
                                                            <img src="icons/delete.gif" alt="delete" className='w-6 cursor-pointer px-1' />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager
