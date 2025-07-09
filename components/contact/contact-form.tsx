"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted!")
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ezeu-dark dark:text-white text-center lg:text-left">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-lg text-ezeu-dark dark:text-white">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            required
            className="mt-2 p-3 border rounded-md w-full bg-white dark:bg-gray-700 text-ezeu-dark dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-lg text-ezeu-dark dark:text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@example.com"
            required
            className="mt-2 p-3 border rounded-md w-full bg-white dark:bg-gray-700 text-ezeu-dark dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-lg text-ezeu-dark dark:text-white">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            rows={5}
            required
            className="mt-2 p-3 border rounded-md w-full bg-white dark:bg-gray-700 text-ezeu-dark dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-ezeu-accent text-white py-3 rounded-md hover:bg-opacity-90 transition-colors text-lg"
        >
          Submit Message
        </Button>
      </form>
    </div>
  )
}
