'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X, Github, ExternalLink } from 'lucide-react';

const projects = [
   {
    title: "Healix",
    image: "/Work2.png",
    description: " healthcare products SaaS platform",
    tech: "Nextjs, Node.js, MongoDB,DynamoDB,Redis,rabbit mq,elasticsearch",
    live: "http://43.205.231.18",
    github: "https://github.com/mhdjaseemtk/healix"
  },
  {
    title: "Psydraft ",
    image: "images/psydraft.png",
    description: "psychology doctor consultation platform",
    tech: "Next.js, Tailwind, Node.js",
    live: "https://psydraft-frontend.vercel.app",
    github: "https://github.com/mhdjaseemtk/psydraft"
  },
 
  {
    title: "Apple ",
    image: "/apple.png",
    description: "Apple products clone E-commerce",
    tech: "React, Node.js, MongoDB",
    live: "https://apple-clone-mern.vercel.app",
    github: "https://github.com/mhdjaseemtk/apple-clone-mern"
  },
  {
    title: "Learning Platform",
    image: "/Work1.png",
    description: "Online learning platform",
    tech: "Next.js, Node.js, MongoDB",
    live: "https://learning-platform-beryl-iota.vercel.app",
    github: "https://github.com/mhdjaseemtk/learning-platform"
  }
];


const fullprojects = [
  {
    title: "Psydraft ",
    image: "images/psydraft.png",
    description: "psychology doctor consultation platform",
    tech: "Next.js, Tailwind, Node.js",
    live: "https://psydraft-frontend.vercel.app",
    github: "https://github.com/mhdjaseemtk/psydraft"
  },

  {
    title: "Apple",
    image: "/apple.png",
    description: "Apple products selling E-commerce",
    tech: "React, Node.js, MongoDB",
    live: "https://apple-clone-mern.vercel.app",
    github: "https://github.com/mhdjaseemtk/apple-clone-mern"
  },
  {
    title: "Learning Platform",
    image: "/Work1.png",
    description: "Online learning platform",
    tech: "Next.js, Node.js, MongoDB",
    live: "https://learning-platform-beryl-iota.vercel.app",
    github: "https://github.com/mhdjaseemtk/learning-platform"
  },
  {
    title: "Admin Innovation ",
    image: "images/adam.png",
    description: "Admin dashboard UI with React",
    tech: "React, Tailwind CSS",
    live: "https://admin-innovation-website-react.vercel.app",
    github: "https://github.com/mhdjaseemtk/admin-innovation-website-react"
  },
  {
    title: "Healix ",
    image: "images/healix.png",
    description: " E-commerce platform",
    tech: "Nextjs, Node.js, MongoDB,DynamoDB,Redis,rabbit mq,elasticsearch",
    live: "http://43.205.231.18",
    github: "https://github.com/mhdjaseemtk/healix"
  },
  {
    title: "Branch Furniture",
    image: "images/branch.png",
    description: "Modern furniture landing page UI",
    tech: "HTML, Tailwind CSS",
    live: "https://mhdjaseemtk.github.io/furniture-landing-page-tailwind/",
    github: "https://github.com/mhdjaseemtk/furniture-landing-page-tailwind"
  }
]

const FeaturedWork = () => {

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAll(false);
    };

    if (showAll) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showAll]);

  const layout = [
    "md:col-span-5",
    "md:col-span-7",
    "md:col-span-7",
    "md:col-span-5"
  ];

  return (
    <>
      <section className="bg-black min-h-screen p-4 sm:p-8 md:p-12 text-white">

        <div className="mb-8">
          <h2 className="text-gray-500 text-sm tracking-wider uppercase">
            (Featured Work)
          </h2>
        </div>

        {/* Responsive Dynamic Grid */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">

          {projects.slice(0,4).map((project,i)=>(
            <Card
              key={i}
              colSpan={layout[i]}
              title={project.title}
              category={project.description}
              year="2024"
              imgSrc={project.image}
            />
          ))}

        </div>

        {/* Buttons */}

        <div className="flex justify-center gap-4">

          <button
            onClick={() => setShowAll(true)}
            className="bg-white text-black px-6 py-3 rounded-md text-sm font-bold"
          >
            SEE ALL WORKS
          </button>

          <button
            onClick={() => setShowAll(true)}
            className="bg-orange-400 p-3 rounded-md text-black"
          >
            <ArrowUpRight size={20}/>
          </button>

        </div>

      </section>

      {/* Modal */}

      {showAll && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={(e)=>{
            if(e.target===e.currentTarget) setShowAll(false)
          }}
        >

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col">

            <div className="flex justify-between px-6 py-5 border-b border-zinc-800">

              <div>
                <h3 className="text-white text-lg font-semibold">All Works</h3>
                <p className="text-zinc-500 text-xs">{projects.length} projects</p>
              </div>

              <button
                onClick={()=>setShowAll(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X size={20}/>
              </button>

            </div>

            <div className="overflow-y-auto p-4 space-y-3">

              {fullprojects.map((project,i)=>(
                <div
                  key={i}
                  className="flex items-center gap-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-4"
                >

                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white text-sm font-semibold">{project.title}</h4>
                    <p className="text-zinc-400 text-xs">{project.description}</p>
                    <p className="text-orange-400 text-xs">{project.tech}</p>
                  </div>

                  <div className="flex gap-2">

                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-xl bg-zinc-800"
                    >
                      <Github size={16}/>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="p-2 rounded-xl bg-orange-400 text-black"
                    >
                      <ExternalLink size={16}/>
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default FeaturedWork;



// Card Component

const Card = ({
  colSpan,
  title,
  category,
  year,
  imgSrc
}:{
  colSpan:string
  title:string
  category:string
  year:string
  imgSrc:string
})=>{

  return(

    <div className={`relative group overflow-hidden opacity-100 hover:opacity-30 rounded-3xl bg-zinc-950 flex items-center justify-center h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] ${colSpan}`}>

      <img
        src={imgSrc}
        alt={title}
        className="max-w-full max-h-full rounded-3xl   object-fill group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>

     

    

    </div>

  )
}