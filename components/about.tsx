import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <section className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Hi, I&apos;m <span className="text-blue-600">Jaseem T K</span>
        </h1>

        <p className="text-gray-600 mb-6">
          I&apos;m a passionate Full-Stack Developer who loves building modern web
          applications using Next.js, React, and TypeScript.
        </p>

        <div className="text-left">
          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
