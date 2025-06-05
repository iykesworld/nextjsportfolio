"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'


interface FormData {
  name: string;
  email: string;
  message: string
}

type FormStatus = "idle" | "loading" | "success" | "error" 
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
      )
    } catch (error) {
      
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setFormData(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const [status, setStatus]= useState<FormStatus>("idle")
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-20 text-center'>Contact Me</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* contact info */}
        <div className='space-y-8'>
          <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
          <p className='text-secondary md:w-2/3'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'>
              <FaEnvelope className='w-6 h-6 text-primary'/>
              <div>
                <h3 className='font-semibold'>Email</h3>
                <Link href="mailto:myemail@email.com" className='text-secondary hover:text-primary'>myemail@email.com</Link>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaPhone className='w-6 h-6 text-primary'/>
              <div>
                <h3 className='font-semibold'>Phone</h3>
                <Link href="tel:+23481928735" className='text-secondary hover:text-primary'>080128398736</Link>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='w-6 h-6 text-primary'/>
              <div>
                <h3 className='font-semibold'>Location</h3>
                <p className='text-secondary hover:text-primary'>San Fransisco</p>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className='bg-white dark:bg-dark/50 p-6 rounded-md shadow-md'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
            <input 
            value={formData.name}
            onChange={handleChange}
            type="text" 
            id='name' 
            required 
            placeholder='Enter your name' 
            className='w-full px-4 py-2 rounded-md border border-gray-300
             dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
              focus:ring-primary focus:border-none' />
          </div>
          <div>
            <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
            <input 
            value={formData.email}
            onChange={handleChange}
            type="email" 
            id='email' 
            required 
            placeholder='Enter your email' 
            className='w-full px-4 py-2 rounded-md border border-gray-300
             dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
              focus:ring-primary focus:border-none' />
          </div>
          <div>
            <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
            <textarea 
            value={formData.message}
            onChange={handleChange}
            id='message' 
            rows={4} 
            required 
            placeholder='Enter your message' 
            className='w-full px-4 py-2 rounded-md border border-gray-300
             dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
              focus:ring-primary focus:border-none' />
          </div>
          <button className='w-full btn btn-primary'>
            { status === "loading"? "Sending" : "Send Message"}
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact