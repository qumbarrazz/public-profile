import Image from "next/image";
// ...existing code...
export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center h-screen w-full">
        <div className="mb-8">
          <img src="/profile.jpg" alt="Qumbar Raza" className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>Qumbar Raza</h1>
        <h2 className="text-2xl font-semibold text-gray-400 mb-8">Software Engineer &bull; Full Stack Developer</h2>
        <div className="flex gap-6 mb-8">
          <a href="mailto:qumbarraza.qr@gmail.com" className="hover:text-green-400 transition text-2xl">Email</a>
          <a href="https://wa.me/97477635341?text=Hello%20Qumbar%20Raza%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener" className="hover:text-green-400 transition text-2xl">WhatsApp</a>
          <a href="https://www.linkedin.com/in/raza-qumbar/" target="_blank" rel="noopener" className="hover:text-blue-400 transition text-2xl">LinkedIn</a>
          <a href="https://github.com/qumbar-raza" target="_blank" rel="noopener" className="hover:text-gray-400 transition text-2xl">GitHub</a>
          
        </div>
        <div className="flex gap-6 mt-6">
          <a href="https://calendly.com/qumbarraza-qr/30min" target="_blank" rel="noopener" className="px-6 py-2 rounded-full bg-green-400 text-black font-bold shadow-lg hover:bg-green-600 hover:text-white transition text-2xl">Schedule Meeting</a>
          <a href="/public/QUMBARRAZA-SOFTWAREENGINEER.pdf" download className="px-8 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-green-400 hover:text-white transition text-2xl">Download CV</a>
        </div>
      </section>
      <section className="w-full max-w-3xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Professional Summary</h3>
        <p className="text-lg text-gray-300 mb-8">Proactive and results-driven Software Engineer with over 4 years of hands-on experience in full-stack development, specializing in building scalable and maintainable web applications using .NET Core, ASP.NET, React, and SQL Server. Adept in clean architecture, cloud infrastructure (Azure & AWS), agile methodologies, and mentoring cross-functional teams. Passionate about solving complex business problems through technology, optimizing application performance, and leading projects from design to deployment.</p>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Technical Skills</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-300 list-disc ml-4 text-lg mb-8">
          <li><b>Frontend:</b> Blazor Web Assembly, Razor, MAUI, React, JavaScript, jQuery, HTML5, CSS3, Bootstrap</li>
          <li><b>Backend:</b> .NET Core, ASP.NET MVC, C#, Entity Framework Core, ADO.NET, REST APIs</li>
          <li><b>Database:</b> SQL Server, SQLite, Firebase</li>
          <li><b>Cloud & DevOps:</b> Azure DevOps, AWS (EC2, RDS, S3), CI/CD Pipelines</li>
          <li><b>Tools:</b> Visual Studio, VS Code, Postman, Insomnia, GitHub, Bitbucket, Azure Repos</li>
          <li><b>Architecture & Principles:</b> SOLID, DRY, Repository Pattern, Dependency Injection, Domain-Driven Design, Clean Code Architecture</li>
          <li><b>Soft Skills:</b> Self-motivated, Effective Communication, Team Collaboration, Mentorship, Problem Solving</li>
        </ul>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Professional Experience</h3>
        <div className="mb-8">
          <b>Senior Software Engineer (ICS)</b> <span className="text-gray-400">| The Church of Jesus Christ of Latter-day Saints, Utah, USA</span> <span className="text-gray-500">Jun 2024 – Present</span>
          <ul className="list-disc ml-6 text-lg text-gray-300">
            <li>Working with BYU Pathway student planning team to enhance and optimize the student portal.</li>
            <li>Managing staff forms and Admin UI for high-level access and issue reporting.</li>
            <li>Tech stack: AngularJS, .NET Core, Azure Functions, Workflows, form builder integrations.</li>
          </ul>
        </div>
        <div className="mb-8">
          <b>Senior Software Engineer</b> <span className="text-gray-400">| 3S Solutions, Lahore, Pakistan</span> <span className="text-gray-500">Apr 2022 – Present</span>
          <ul className="list-disc ml-6 text-lg text-gray-300">
            <li>Led full-stack development for enterprise-grade apps using React, Razor, Blazor, .NET Core, Azure.</li>
            <li>Improved backend performance by 25% via scalable microservices.</li>
            <li>Designed coding standards, reusable components, CI/CD strategies (Azure DevOps).</li>
            <li>Integrated APIs, optimized data pipelines, mentored junior devs, and coordinated with US clients.</li>
            <li>Championed agile processes and maintained 95% client satisfaction.</li>
          </ul>
        </div>
        <div className="mb-8">
          <b>Software Engineer</b> <span className="text-gray-400">| Aptecsol, Remote, Canada</span> <span className="text-gray-500">Jan 2021 – Mar 2022</span>
          <ul className="list-disc ml-6 text-lg text-gray-300">
            <li>Migrated legacy web apps to .NET Core microservices.</li>
            <li>Designed RESTful APIs, improved authentication and response times.</li>
            <li>Streamlined CI/CD workflows, managed client interactions and support.</li>
            <li>Developed dashboards and reporting tools with React and Chart.js.</li>
          </ul>
        </div>
        <div className="mb-8">
          <b>Associate Software Engineer</b> <span className="text-gray-400">| Leadersol Technologies, Lahore, Pakistan</span> <span className="text-gray-500">Jul 2020 – Dec 2020</span>
          <ul className="list-disc ml-6 text-lg text-gray-300">
            <li>Developed web modules and forms using ASP.NET MVC, Razor, jQuery, SQL Server.</li>
            <li>Implemented AJAX interactivity and optimized databases.</li>
            <li>Participated in scrums, sprint reviews, and client demos.</li>
          </ul>
        </div>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Education</h3>
        <ul className="list-disc ml-6 text-lg text-gray-300 mb-8">
          <li><b>Bachelor of Engineering (Mechatronics)</b> – National University of Sciences and Technology (NUST), Jul 2020</li>
          <li><b>FSc Pre-Engineering</b> – Air Base Inter College Mushaf Sargodha (ABICS), May 2016</li>
        </ul>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Projects</h3>
        <ul className="list-disc ml-6 text-lg text-gray-300 mb-8">
          <li><b>Dillners Accounting Tools:</b> Backend enhancements & API integrations (.NET Core, SQL Server, Azure, REST APIs)</li>
          <li><b>GraspLingo – Language Learning App:</b> GPT-4 integration for language modules (React, .NET 7, SQL Server, OpenAI APIs)</li>
          <li><b>BeneSys Order Flow System:</b> Print-on-demand platform (Razor Pages, .NET 5, SQL Server)</li>
          <li><b>BYU Pathway – Education Platform:</b> Curriculum/resource management (AngularJS, React, .NET Core, DDD)</li>
        </ul>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Activities & Interests</h3>
        <ul className="list-disc ml-6 text-lg text-gray-300 mb-8">
          <li>War Studies</li>
          <li>Hockey</li>
          <li>Swimming</li>
          <li>AI/ML Technologies</li>
          <li>Tech Blogging</li>
        </ul>
        <h3 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">Additional Information</h3>
        <ul className="list-disc ml-6 text-lg text-gray-300">
          <li><b>Languages:</b> English (Fluent), Urdu (Native), Arabic (Basic)</li>
          <li><b>Availability:</b> Immediate</li>
          <li><b>QID:</b> Valid</li>
          <li><b>NOC:</b> Available (If applicable)</li>
        </ul>
      </section>
    </main>
  );
}
