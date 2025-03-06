'use client'

import { useState } from 'react'
import { Pen } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (data.success) {
                toast.success("Email sent successfully", {duration: 2000});
                setFormData({ name: "", location: "", email: "", message: "" });
            } else {
                toast.error("Failed to send email, Please try again.", {duration: 2000});
            }
        } catch {
            toast.error("Something went wrong. Please try again later.", {duration: 2000});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 text-white">
            <div className="max-w-3xl mx-auto">
                <p className="text-gray-400 mb-12">
                    Let&apos;s start a conversation! Fill out our contact form,
                    and we&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-bold">Hello😊</h2>
                    </div>

                    <div className="flex items-baseline gap-4 flex-col md:flex-row">
                        <label htmlFor="name" className="text-4xl font-bold whitespace-nowrap">
                            My name is
                        </label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-transparent border-0 border-b border-gray-600 rounded-none focus:ring-0 text-xl px-0 pb-1 pt-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="flex items-baseline gap-4 flex-col md:flex-row">
                        <label htmlFor="company" className="text-4xl font-bold whitespace-nowrap">
                            I&apos;m from
                        </label>
                        <Input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter your location"
                            className="bg-transparent border-0 border-b border-gray-600 rounded-none focus:ring-0 text-xl px-0 pb-1 pt-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="flex items-baseline gap-4 flex-col md:flex-row">
                        <label htmlFor="email" className="text-4xl font-bold whitespace-nowrap">
                            Here is my email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="bg-transparent border-0 border-b border-gray-600 rounded-none focus:ring-0 text-xl px-0 pb-1 pt-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="flex items-baseline gap-4 flex-col md:flex-row">
                        <label htmlFor="message" className="text-4xl font-bold whitespace-nowrap">
                            And message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            className="bg-transparent border-0 border-b border-gray-600 rounded-none focus:ring-0 text-xl px-0 pb-1 pt-0 resize-none min-h-0 h-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="mt-12">
                        <Button
                            type="submit"
                            className="bg-white text-black hover:bg-gray-100 rounded-full text-3xl font-bold py-6 px-12 cursor-pointer h-auto w-full flex items-center justify-between group"
                            disabled={loading}
                        >
                            <span>{loading ? "Sending..." : "Submit"}</span>
                            <span className="ml-4 p-3 bg-black rounded-full transition-transform group-hover:-rotate-135">
                                {loading ? (
                                    <div className="animate-spin h-6 w-6 border-4 border-white border-t-transparent rounded-full"></div>
                                ) : (
                                    <Pen className="h-6 w-6 text-white" />
                                )}
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
