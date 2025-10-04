import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // save to mongodb later
        
        localStorage.setItem('contactFormData', JSON.stringify(formData))
        alert('Message sent successfully!') 

        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Have questions about our password manager? Need support or want to share feedback?
                        We'd love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                            📧 Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="support">Technical Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="feature">Feature Request</option>
                                    <option value="bug">Bug Report</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                                Send Message 🚀
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                📞 Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">📧</span>
                                    <div>
                                        <p className="font-medium text-slate-700">Email</p>
                                        <a
                                            href="mailto:rushikatte2005@gmail.com"
                                            className="text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            rushikatte2005@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🕐</span>
                                    <div>
                                        <p className="font-medium text-slate-700">Response Time</p>
                                        <p className="text-slate-600">Usually within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🌍</span>
                                    <div>
                                        <p className="font-medium text-slate-700">Location</p>
                                        <p className="text-slate-600">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                ❓ Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-slate-700 mb-1">
                                        Is my data secure?
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        Yes! All data is stored locally on your device and never transmitted online.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-slate-700 mb-1">
                                        How do I backup my passwords?
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        Currently, passwords are stored in your browser's local storage.
                                        Export functionality is coming soon!
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-slate-700 mb-1">
                                        Can I use this on mobile?
                                    </h4>
                                    <p className="text-slate-600 text-sm">
                                        Yes! The app is fully responsive and works great on all devices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Support Options */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                🛠️ Need Immediate Help?
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="mailto:rushikatte2005@gmail.com?subject=Urgent Support Request"
                                    className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Email Support
                                </a>
                                <p className="text-sm text-slate-600 text-center">
                                    For urgent issues, please include "URGENT" in your email subject
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                        💝 Thank You!
                    </h3>
                    <p className="text-slate-600 max-w-3xl mx-auto">
                        Your feedback helps us improve the password manager. Whether it's a bug report,
                        feature suggestion, or just a hello - we appreciate every message we receive.
                        Together, we can make password management safer and easier for everyone!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact