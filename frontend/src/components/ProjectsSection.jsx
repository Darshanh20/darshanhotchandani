import { useState } from 'react'
import './ProjectsSection.css'

const PROJECTS = [
    {
    id: 7,
    title: 'ProGrade',
    type: 'group',
    images: ['p8(1).png', 'p8(2).png', 'p8(3).png', 'p8(4).png'],
    description: 'ProGrade is a rubrics-based project evaluation system designed to streamline academic assessments. It allows faculty to create, customize, and apply structured rubrics for fair, consistent, and transparent project grading. With an intuitive interface built using React and Node.js, ProGrade simplifies evaluation workflows while improving accuracy. It bridges the gap between students and faculty by ensuring clarity, feedback, and organized result tracking.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/SGP_S5' },
      { label: 'Use Here', url: 'https://pro-grade.vercel.app/' }
    ]
  },
  {
    id: 1,
    title: 'ShareEZ',
    type: 'individual',
    images: ['p6(1).png', 'p6(2).png', 'p6(3).png', 'p6(4).png'],
    description: 'ShareEZ is a secure, anonymous file-sharing app I built during my internship at CodeClause. Users can upload files without signing in, generate customizable passwords, and set optional expiry dates for links. The app creates a secure shareable link and password to control access, all wrapped in a simple, user-friendly interface with a dark theme.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/Darshanh20/CodeClauseInternship_File-Sharing-Platform' },
      { label: 'Use Here', url: 'https://shareez.netlify.app/' }
    ]
  },
  {
    id: 2,
    title: 'MoneyLog',
    type: 'group',
    images: ['p1(1).png', 'p1(2).png', 'p1(3).png', 'p1(4).png'],
    description: 'MONEYLOG is a smart expense-tracking application designed to simplify financial management. Managing expenses can be tedious and stressful, so MONEYLOG provides an intuitive and efficient solution to track spending, categorize transactions, and gain insights into financial habits.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/SGP_S4' }
    ]
  },
  {
    id: 3,
    title: 'Brief - The Ultimate Resume Builder',
    type: 'individual',
    images: ['p7(1).png', 'p7(2).png', 'p7(3).png', 'p7(4).png'],
    description: 'The Ultimate Resume Builder is a sleek and user-friendly web application I developed for my portfolio. It allows users to create professional resumes with ease, using customizable templates and real-time previews. Built with React and Supabase, the platform supports secure authentication, dynamic form inputs, and downloadable image resumes.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/Darshanh20/CodeClauseInternship_Interactive-Resume-Builder' },
      { label: 'Use Here', url: 'https://resumebuilderbrief.netlify.app/' }
    ]
  },
  {
    id: 4,
    title: 'Vaccine Care',
    type: 'group',
    images: ['p3(1).png', 'p3(2).png', 'p3(2).png', 'p3(2).png'],
    description: 'Vaccine Care is a healthcare application designed to help users track vaccinations, schedule appointments, and access vaccine-related information. The app ensures a seamless and user-friendly experience for individuals managing their immunization records.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/VaccineCare' }
    ]
  },
  {
    id: 5,
    title: 'Design Experiments',
    type: 'individual',
    images: ['p4(1).png', 'p4(2).png', 'p4(3).png', 'p2(4).png'],
    description: 'A collection of mini-projects and concept designs I created while learning UI/UX and front-end development. These projects helped me explore layouts, navigation patterns, visual hierarchy, and responsiveness. Each one reflects hands-on learning and creative problem-solving through tools like Figma, HTML/CSS, and JavaScript.',
    links: [
      { label: 'PDF', url: 'https://drive.google.com/file/d/1Y0XqZUtjf6-n6rUBCOSX1HTLO9Qo55AQ/view?usp=drive_link' }
    ]
  },
  {
    id: 6,
    title: 'TRAVELSY',
    type: 'group',
    images: ['p5(1).png', 'p5(2).png', 'p5(2).png', 'p5(2).png'],
    description: 'TRAVELSY is a web-based platform designed as a one-stop solution for travelers, built for the SIH Hackathon. The website allows users to book tickets, view travel photos, explore locations, and find travel-related information in one place.',
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/Travelsy' }
    ]
  }
]

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image, projectTitle) => {
    setSelectedImage({ src: image, title: projectTitle })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="legend">
        <div><span className="dot known-dot"></span> Group Projects</div>
        <div><span className="dot learning-dot"></span> Individual Projects</div>
      </div>

      <div className="projects-grid">
        {PROJECTS.reverse().map((project) => (
          <article key={project.id} className={`project-card ${project.type}`}>
            <div className="project-images">
              {project.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={`/src/assets/${img}`} 
                  alt={`${project.title} ${idx + 1}`}
                  onClick={() => handleImageClick(`/src/assets/${img}`, project.title)}
                />
              ))}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p className="modal-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
