import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-slate-800 mb-6 text-center">
                        About Password Manager
                    </h1>

                    <div className="space-y-6 text-slate-600">
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                                🔒 What is this?
                            </h2>
                            <p className="text-lg leading-relaxed">
                                A simple, secure, and user-friendly password manager built with React.js.
                                This application helps you store and manage all your passwords in one secure location,
                                making it easy to maintain strong, unique passwords for all your accounts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                                ✨ Features
                            </h2>
                            <ul className="space-y-2 text-lg">
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Store unlimited passwords securely
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Copy passwords to clipboard with one click
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Show/hide password visibility toggle
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Edit and delete existing passwords
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Local storage - your data stays on your device
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    Responsive design for all devices
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                                🛡️ Security
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Your passwords are stored locally in your browser's localStorage.
                                This means your sensitive data never leaves your device and is not
                                transmitted over the internet. For enhanced security, consider using
                                this application only on your personal devices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                                🚀 Technology Stack
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <span className="text-2xl">⚛️</span>
                                    <p className="mt-2 font-medium">React.js</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <span className="text-2xl">🎨</span>
                                    <p className="mt-2 font-medium">Tailwind CSS</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <span className="text-2xl">⚡</span>
                                    <p className="mt-2 font-medium">Vite</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg text-center">
                                    <span className="text-2xl">📱</span>
                                    <p className="mt-2 font-medium">Responsive</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                                📝 How to Use
                            </h2>
                            <ol className="space-y-2 text-lg list-decimal list-inside">
                                <li>Enter the website URL for which you want to store the password</li>
                                <li>Add your username or email for that website</li>
                                <li>Enter your password (use the eye icon to toggle visibility)</li>
                                <li>Click "Save Password" to store it securely</li>
                                <li>View all your saved passwords in the table below</li>
                                <li>Use the copy buttons to quickly copy credentials</li>
                                <li>Edit or delete passwords as needed</li>
                            </ol>
                        </section>

                        <section className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                            <h2 className="text-2xl font-semibold text-yellow-800 mb-3">
                                ⚠️ Important Note
                            </h2>
                            <p className="text-yellow-700 text-lg">
                                This is a demonstration project for learning purposes. For production use,
                                consider implementing additional security measures such as encryption,
                                master password protection, and secure backup options.
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500">
                            Made with ❤️ using React.js | Keep your passwords safe! 🔐
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About