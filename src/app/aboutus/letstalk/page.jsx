"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setMessage(""), 4000)
      } else {
        setMessage("❌ Something went wrong. Try again.");
        setTimeout(() => setMessage(""), 4000)
      }
    } catch (error) {
      setMessage("⚠️ Network error, please retry.");
      setTimeout(() => setMessage(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 px-10 text-center ">
      <h2 className="text-xl md:text-2xl font-semibold mb-8">
        Let’s Take You To The World!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border-b border-gray-400 focus:border-green-500 outline-none py-2 text-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email ID"
          value={formData.email}
          onChange={handleChange}
          className="border-b border-gray-400 focus:border-green-500 outline-none py-2 text-sm"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Mobile No"
          value={formData.phone}
          onChange={handleChange}
          className="border-b border-gray-400 focus:border-green-500 outline-none py-2 text-sm"
          required
        />
        <div className="col-span-full">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 text-white font-medium rounded-full px-8 py-2 mt-6 hover:bg-green-600 transition-all disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-600 transition-all">{message}</p>
      )}
    </div>
  );
}
