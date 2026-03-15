// =============================================================================
// pages/skills.js
// =============================================================================
// The Skills page. Shows a radar chart, skill bars, and a word cloud.
//
// WHAT TO EDIT:
//   1. Edit the "skills" object below — rename categories and skills to match yours
//   2. Adjust the percentage (level) for each skill (0–100)
//   3. Edit the "clusters" array at the bottom — these appear as the word cloud
//   4. The radar chart is automatically built from the first category's skills
//
// SKILL LEVEL GUIDE (be honest — recruiters appreciate accuracy):
//   90–100 = Expert / daily use
//   75–89  = Proficient / comfortable
//   60–74  = Familiar / used in projects
//   40–59  = Learning / basic knowledge
// =============================================================================

import Head from 'next/head'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { profile } from '../data/profile'

// =============================================================================
// EDIT THIS SECTION — Your skill categories and proficiency levels
// You can rename categories, add/remove categories, and add/remove skills.
// Keep at least 4–6 skills in the first category (used for the radar chart).
// =============================================================================
const skills = {

  // First category is used for the radar chart — keep 5–8 skills here
  'YOUR_CATEGORY_1': [     // e.g. 'AI & Machine Learning'
    { name: 'YOUR_SKILL_1', level: 90 },   // e.g. { name: 'Python', level: 90 }
    { name: 'YOUR_SKILL_2', level: 85 },
    { name: 'YOUR_SKILL_3', level: 80 },
    { name: 'YOUR_SKILL_4', level: 75 },
    { name: 'YOUR_SKILL_5', level: 70 },
    { name: 'YOUR_SKILL_6', level: 65 },
  ],

  'YOUR_CATEGORY_2': [     // e.g. 'Programming & Tools'
    { name: 'YOUR_SKILL_A', level: 88 },
    { name: 'YOUR_SKILL_B', level: 80 },
    { name: 'YOUR_SKILL_C', level: 72 },
    { name: 'YOUR_SKILL_D', level: 65 },
  ],

  'YOUR_CATEGORY_3': [     // e.g. 'Research & Communication'
    { name: 'YOUR_SKILL_I', level: 92 },
    { name: 'YOUR_SKILL_II', level: 88 },
    { name: 'YOUR_SKILL_III', level: 85 },
  ],

  'YOUR_CATEGORY_4': [     // e.g. 'Platforms & Systems'
    { name: 'YOUR_SKILL_X', level: 75 },
    { name: 'YOUR_SKILL_Y', level: 68 },
    { name: 'YOUR_SKILL_Z', level: 62 },
  ],

}

// =============================================================================
// EDIT THIS — Word cloud of your skills and keywords
// These appear in random sizes at the bottom of the page.
// Add 12–20 short skill/keyword phrases.
// =============================================================================
const clusters = [
  'YOUR_KEYWORD_1',
  'YOUR_KEYWORD_2',
  'YOUR_KEYWORD_3',
  'YOUR_KEYWORD_4',
  'YOUR_KEYWORD_5',
  'YOUR_KEYWORD_6',
  'YOUR_KEYWORD_7',
  'YOUR_KEYWORD_8',
  'YOUR_KEYWORD_9',
  'YOUR_KEYWORD_10',
  'YOUR_KEYWORD_11',
  'YOUR_KEYWORD_12',
]

const clusterSizes = [
  'text-2xl', 'text-xl',  'text-lg',  'text-2xl', 'text-base',
  'text-xl',  'text-lg',  'text-base','text-xl',  'text-lg',
  'text-sm',  'text-2xl',
]

// =============================================================================
// COMPONENTS — Do not edit below this line unless you know React
// =============================================================================

function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.5 }} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-body text-sm text-parchment-200">{name}</span>
        <span className="font-mono text-xs text-gold-400/70">{level}%</span>
      </div>
      <div className="h-1 bg-noir-600 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
          viewport={{ once: true }} transition={{ delay: delay + 0.2, duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg,#c98a00,#f4c040)' }} />
      </div>
    </motion.div>
  )
}

function RadarChart({ data }) {
  const N = data.length, cx = 150, cy = 150, r = 105
  const angles = data.map((_, i) => (i / N) * Math.PI * 2 - Math.PI / 2)
  const pt = (angle, rad) => ({ x: cx + rad * Math.cos(angle), y: cy + rad * Math.sin(angle) })
  const poly = data.map((d, i) => pt(angles[i], (d.level / 100) * r))
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
      {[0.25, 0.5, 0.75, 1].map(l => (
        <polygon key={l} points={angles.map(a => pt(a, l * r)).map(p => `${p.x},${p.y}`).join(' ')}
          fill="none" stroke="rgba(232,169,0,0.1)" strokeWidth="1" />
      ))}
      {angles.map((a, i) => { const p = pt(a, r); return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(232,169,0,0.12)" strokeWidth="1" /> })}
      <polygon points={poly.map(p => `${p.x},${p.y}`).join(' ')} fill="rgba(232,169,0,0.1)" stroke="rgba(244,192,64,0.7)" strokeWidth="1.5" />
      {poly.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill="#f4c040" />)}
      {data.map((d, i) => {
        const lp = pt(angles[i], r + 22)
        return (
          <text key={i} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle"
            fontSize="8.5" fill="rgba(237,229,208,0.65)" fontFamily="JetBrains Mono,monospace">
            {d.name.length > 14 ? d.name.slice(0, 12) + '…' : d.name}
          </text>
        )
      })}
    </svg>
  )
}

export default function Skills() {
  const fullName = `${profile.name.first} ${profile.name.last}`
  const firstCategory = Object.values(skills)[0]

  return (
    <>
      <Head><title>{`Skills — ${fullName}`}</title></Head>
      <PageTransition>
        <div className="min-h-screen pt-28 pb-24">
          <div className="max-w-6xl mx-auto px-6">

            <SectionReveal>
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-gold-500/60" />
                  <span className="font-mono text-xs text-gold-400 tracking-widest uppercase">Skills</span>
                </div>
                <h1 className="font-display text-5xl md:text-7xl font-light text-parchment-100 mb-4">
                  Technical <span className="gold-text italic">Expertise</span>
                </h1>
                <div className="section-divider mt-8" />
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-5 gap-12 mb-16">
              <SectionReveal className="md:col-span-2">
                <div className="glass-card p-6">
                  <h3 className="font-mono text-xs text-gold-400 tracking-widest uppercase mb-6 text-center">
                    Competency Radar
                  </h3>
                  <RadarChart data={firstCategory} />
                  <p className="font-mono text-xs text-parchment-400/40 text-center mt-4">Self-assessed proficiency</p>
                </div>
              </SectionReveal>

              <div className="md:col-span-3 space-y-6">
                {Object.entries(skills).map(([cat, catSkills], ci) => (
                  <SectionReveal key={cat} delay={ci * 0.1}>
                    <div className="glass-card p-6">
                      <h3 className="font-display text-lg text-parchment-100 mb-5">{cat}</h3>
                      {catSkills.map((s, i) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + i * 0.05} />
                      ))}
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            <SectionReveal>
              <div className="section-divider mb-12" />
              <h2 className="font-display text-2xl text-parchment-100 mb-8">Skill Clusters</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {clusters.map((item, i) => (
                  <motion.span key={item}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className={`font-display ${clusterSizes[i] || 'text-base'} text-parchment-300 hover:text-gold-400 cursor-default transition-colors duration-200 px-2`}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </SectionReveal>

          </div>
        </div>
      </PageTransition>
    </>
  )
}
