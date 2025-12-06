import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { baseMeta } from '~/utils/meta';
import styles from './resume.module.css';

export const meta = () => {
    return baseMeta({
        title: 'Resume',
        description: 'Resume of Lakshya Bhambhani - Gen AI Engineer & Full-Stack Developer',
    });
};

export const Resume = () => {
    return (
        <div className={styles.resume}>
            <Section className={styles.section}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <Heading level={1} className={styles.name}>
                            Lakshya Bhambhani
                        </Heading>
                        <Text size="l" className={styles.title}>
                            Gen AI Engineer | Full-Stack Developer
                        </Text>
                        <div className={styles.contact}>
                            <a href="mailto:lakshyabh1509@gmail.com">lakshyabh1509@gmail.com</a>
                            <span className={styles.separator}>|</span>
                            <span>+91-9599153377</span>
                            <span className={styles.separator}>|</span>
                            <a href="https://www.linkedin.com/in/lakshya-bhambhani-888189260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span className={styles.separator}>|</span>
                            <a href="https://github.com/Lakshyabh1509" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </header>

                    <div className={styles.resumeSection}>
                        <Heading level={3} className={styles.sectionTitle}>
                            Professional Summary
                        </Heading>
                        <Text className={styles.summary}>
                            Results-driven Gen AI Engineer with hands-on experience building LLM pipelines,
                            RAG systems, and scalable backend architectures. Proven track record of delivering
                            measurable outcomes: +22% prediction accuracy, +90% operational efficiency, and
                            +50% user engagement improvements. Specialized in autonomous AI agent development,
                            high-velocity data pipelines, and enterprise-grade solutions that scale.
                        </Text>
                    </div>

                    <div className={styles.resumeSection}>
                        <Heading level={3} className={styles.sectionTitle}>
                            Experience
                        </Heading>
                        <div className={styles.experience}>
                            <div className={styles.expHeader}>
                                <div>
                                    <Text size="l" weight="bold" className={styles.expTitle}>
                                        Gen AI Engineer Intern
                                    </Text>
                                    <Text className={styles.expCompany}>
                                        wsup.ai (Bluestacks)
                                    </Text>
                                </div>
                                <Text className={styles.expDate}>May 2025 – Jul 2025</Text>
                            </div>
                            <ul className={styles.expList}>
                                <li>Optimized LLM-driven engagement pipelines, increasing chat length by 50% and reducing churn by 30%</li>
                                <li>Built Emotion Repetition Extractor and Phrase Loop Tracker for conversation analysis</li>
                                <li>Automated logging and analytics workflows, reducing A/B testing cycle time by 40%</li>
                                <li>Validated API concurrency handling 999+ parallel requests with zero degradation</li>
                                <li>Developed Dynamic Memory Cache for enhanced AI response performance</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.resumeSection}>
                        <Heading level={3} className={styles.sectionTitle}>
                            Technical Skills
                        </Heading>
                        <div className={styles.skills}>
                            <div className={styles.skillGroup}>
                                <Text weight="bold">Languages:</Text>
                                <Text>Python, JavaScript/TypeScript, PHP, SQL</Text>
                            </div>
                            <div className={styles.skillGroup}>
                                <Text weight="bold">AI/ML:</Text>
                                <Text>LangChain, LangGraph, RAG, Transformers, PyTorch, Scikit-learn</Text>
                            </div>
                            <div className={styles.skillGroup}>
                                <Text weight="bold">Backend:</Text>
                                <Text>FastAPI, Node.js, Fastify, Flask, PostgreSQL, Redis, Docker</Text>
                            </div>
                            <div className={styles.skillGroup}>
                                <Text weight="bold">Frontend:</Text>
                                <Text>React, Next.js, Remix, Three.js, TailwindCSS</Text>
                            </div>
                            <div className={styles.skillGroup}>
                                <Text weight="bold">Cloud & Tools:</Text>
                                <Text>AWS, Supabase, Vercel, Git, Tableau</Text>
                            </div>
                        </div>
                    </div>

                    <div className={styles.resumeSection}>
                        <Heading level={3} className={styles.sectionTitle}>
                            Key Projects
                        </Heading>
                        <div className={styles.projects}>
                            <div className={styles.project}>
                                <Text weight="bold">OmniNexus - Enterprise Intelligence Suite</Text>
                                <Text>Multi-modal platform with LangGraph agent swarms, RAG pipelines, and automated compliance monitoring. Reduced operational drag by 90%.</Text>
                            </div>
                            <div className={styles.project}>
                                <Text weight="bold">TransactIQ - Transaction Intelligence Platform</Text>
                                <Text>ML-powered churn prediction with 94% accuracy, real-time KPI dashboards, and 2FA security implementation.</Text>
                            </div>
                            <div className={styles.project}>
                                <Text weight="bold">SAVOO - High-Performance Recipe API</Text>
                                <Text>Dual-backend architecture (PHP + Node.js) targeting 10k+ RPM with JWT auth and Redis caching.</Text>
                            </div>
                            <div className={styles.project}>
                                <Text weight="bold">Apex Marketing Intelligence Suite</Text>
                                <Text>Real-time collaboration platform with WebRTC screen sharing and AI-powered chat analysis.</Text>
                            </div>
                            <div className={styles.project}>
                                <Text weight="bold">EDQMP - Enterprise Data Quality Platform</Text>
                                <Text>Automated data validation and anomaly detection for enterprise data pipelines.</Text>
                            </div>
                            <div className={styles.project}>
                                <Text weight="bold">AI Automation Platform</Text>
                                <Text>Multi-modal AI workflows with website-to-brochure automation and RAG knowledge workers.</Text>
                            </div>
                        </div>
                    </div>

                    <div className={styles.resumeSection}>
                        <Heading level={3} className={styles.sectionTitle}>
                            Education
                        </Heading>
                        <div className={styles.education}>
                            <div className={styles.eduRow}>
                                <Text size="l" weight="bold" as="span" className={styles.eduSchool}>
                                    Vellore Institute of Technology (VIT), Vellore
                                </Text>{' '}
                                <span className={styles.eduSeparator}>|</span>{' '}
                                <Text size="l" as="span" className={styles.eduDegree}>
                                    B.Tech in Computer Science
                                </Text>
                            </div>
                            <div className={styles.eduRow}>
                                <Text as="span" className={styles.eduGpa}>GPA: 7.53</Text>{' '}
                                <span className={styles.eduSeparator}>|</span>{' '}
                                <Text as="span" className={styles.expDate}>Sept 2022 – Sept 2026</Text>
                            </div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button href="/contact" icon="send">
                            Get in Touch
                        </Button>
                        <Button secondary href="/" icon="chevron-left">
                            Back to Portfolio
                        </Button>
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
