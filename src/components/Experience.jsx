import { motion } from 'framer-motion'

const Experience = () => {
  const skills = [
    { category: "Languages", items: ["C", "C++", "JavaScript", "SQL", "NoSQL"] },
    { category: "Developer Tools", items: ["VS Code", "Android Studio", "IntelliJ IDEA Ultimate"] },
    { category: "Technologies/Frameworks", items: ["GitHub", "ReactJS", "Redux", "NodeJS", "ExpressJS", "Git", "MongoDB", "Supabase"] }
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience & Skills</h2>
        
        <div className="grid gap-8">
          <div className="bg-tertiary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="mb-6">
              <h4 className="text-secondary">Dharmsinh Desai University</h4>
              <p className="text-lightestText">B.Tech (IT) - CGPA: 7.15</p>
              <p className="text-sm text-lightestText">07 2023 - 05 2026 | Nadiad, India</p>
            </div>
            <div>
              <h4 className="text-secondary">HSC - Gujarat Board</h4>
              <p className="text-lightestText">Percentage: 84%</p>
              <p className="text-sm text-lightestText">2020 - 2022 | Jamnagar, India</p>
            </div>
          </div>

          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-tertiary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary border border-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience