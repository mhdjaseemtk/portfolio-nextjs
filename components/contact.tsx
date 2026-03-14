// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-xl">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-blue-600">Me</span>
        </h1>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Jaseem T K
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

        </form>

        {/* Direct Email Option */}
        <div className="mt-8 text-center text-gray-600">
          Or email me directly at:
          <p className="text-blue-600 font-medium mt-2">
            mhdjaseemtk@email.com
          </p>
        </div>

      </div>
    </main>
  );
}
