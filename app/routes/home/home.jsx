import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import chronosDashboard from '~/assets/chronos-dashboard.png';
import transactiqDashboard from '~/assets/transactiq-dashboard.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Experience } from './experience';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Gen AI Engineer + Full-Stack Developer',
    description: `Portfolio of ${config.name} — a Gen AI Engineer specializing in LLM pipelines, RAG systems, and scalable backend development. Proven track record: +22% accuracy, +90% efficiency, +50% engagement.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const experience = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, experience, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {/* Project 1: CHRONOS COMPLIANCE ENGINE */}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="CHRONOS: Corporate Actions & Covenant Lifecycle Management"
        description="Enterprise compliance, covenant monitoring, and corporate actions management platform with real-time risk scoring, Basel III/Dodd-Frank regulatory reporting, and 90% reduction in manual covenant review."
        buttonText="View Project"
        buttonLink="/projects/chronos"
        model={{
          type: 'laptop',
          alt: 'Chronos Compliance Engine Dashboard',
          textures: [
            {
              srcSet: `${chronosDashboard} 1280w, ${chronosDashboard} 2560w`,
              placeholder: chronosDashboard,
            },
          ],
        }}
      />
      {/* Project 2: TRANSACTIQ */}
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="TRANSACTIQ: Transaction Analytics & Merchant Intelligence"
        description="Full-stack transaction performance analytics platform with ETL pipelines, real-time KPIs, RFM customer segmentation, ML-powered churn prediction, and merchant performance dashboards. Scaled to 500k+ daily transactions."
        buttonText="View Project"
        buttonLink="/projects/transactiq"
        model={{
          type: 'laptop',
          alt: 'TransactIQ Analytics Dashboard',
          textures: [
            {
              srcSet: `${transactiqDashboard} 1280w, ${transactiqDashboard} 2560w`,
              placeholder: transactiqDashboard,
            },
          ],
        }}
      />
      {/* Project 3: APEX MARKETING */}
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="APEX: Marketing Intelligence Suite"
        description="Unified marketing intelligence with predictive analytics (85% accuracy), Firebase/WebRTC real-time collaboration, ETL connectors for Salesforce/HubSpot, RLS governance, and interactive dashboards. Reduced reporting time from 4h to 15min."
        buttonText="View Project"
        buttonLink="/projects/apex-marketing"
        model={{
          type: 'laptop',
          alt: 'Apex Marketing Suite Dashboard',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* Project 4: OMNINEXUS */}
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="OMNINEXUS: Enterprise Intelligence Suite"
        description="Next-gen platform for corporate action management with Command Center dashboard, C-AMP portfolio management, Intelligent Reporting (jsPDF/SheetJS), and GPT/Claude-powered AI assistant for financial Q&A."
        buttonText="View Project"
        buttonLink="/projects/omninexus"
        model={{
          type: 'laptop',
          alt: 'OmniNexus Platform Dashboard',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* Project 5: SYNAPSE */}
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="SYNAPSE: AI Automation & Workflow Orchestration"
        description="Multi-model LLM automation platform with Brochure Generator (web extraction + PDF), Flight Assistant (multi-turn + image parsing), and RAG Knowledge Worker. Powered by Base44, GPT-4, Claude, and HuggingFace."
        buttonText="View Project"
        buttonLink="/projects/ai-automation"
        model={{
          type: 'laptop',
          alt: 'Synapse AI Automation Platform',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      {/* Project 6: SAVOO */}
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="SAVOO: High-Performance Dual Backend Recipe API"
        description="Scalable REST API with parallel PHP (Nginx/PHP-FPM) and Node.js (Fastify/TypeScript) backends. Features JWT auth, Redis rate limiting, Argon2id hashing, Docker Compose, and 10k+ RPM throughput."
        buttonText="View Project"
        buttonLink="/projects/savoo"
        model={{
          type: 'laptop',
          alt: 'SAVOO API Architecture',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      {/* Project 7: EDQMP */}
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="EDQMP: Enterprise Data Quality & Monitoring Platform"
        description="Enterprise-grade data quality validation with Airflow DAG tracking, anomaly detection (Z-score, Isolation Forest), SLA monitoring, lineage tracking, and governance framework. Deployed on Docker/Kubernetes with Terraform IaC."
        buttonText="View Project"
        buttonLink="/projects/edqmp"
        model={{
          type: 'laptop',
          alt: 'EDQMP Data Quality Dashboard',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Experience
        id="experience"
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
