import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
import { media } from '~/utils/style';
import {
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './ai-automation.module.css';
import { GlassAnimation } from './GlassAnimation';



const title = 'SYNAPSE – AI Automation & Workflow Orchestration Platform';
const description =
    'Automates enterprise workflows using multi-model LLMs with structured execution frameworks, enabling content generation, travel intelligence, and document processing.';
const roles = [
    'LLM Orchestration',
    'RAG Pipeline Design',
    'Workflow Automation',
    'Multi-Model AI',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const AIAutomation = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <GlassAnimation />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://synapse-fdea9ab5.base44.app/"
                    roles={roles}
                />



                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Executive Summary</ProjectSectionHeading>
                        <ProjectSectionText>
                            Synapse automates enterprise workflows using multi-model LLMs with structured
                            execution frameworks, enabling content generation, travel intelligence, and
                            document processing.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Workflows</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.moduleGrid}>
                        <div className={styles.moduleCard}>
                            <h3>Brochure Generator</h3>
                            <p>
                                Auto web context extraction, JSON schema structured output,
                                gradient card-based brochure rendering
                            </p>
                            <div className={styles.techTags}>
                                <span>Web Scraping</span>
                                <span>LLM</span>
                                <span>PDF Gen</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>Flight Assistant</h3>
                            <p>
                                Multi-turn conversational AI, image upload + ticket parsing,
                                price comparison + flight analysis
                            </p>
                            <div className={styles.techTags}>
                                <span>Multi-Modal</span>
                                <span>Vision AI</span>
                                <span>Conversational</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>Knowledge Worker (RAG)</h3>
                            <p>
                                Document upload, summary generation, query with cited sources,
                                entity-based history tracking
                            </p>
                            <div className={styles.techTags}>
                                <span>RAG</span>
                                <span>Vector DB</span>
                                <span>Citations</span>
                            </div>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Base44 LLM Orchestration</span>
                        <span className={styles.techBadge}>GPT-4</span>
                        <span className={styles.techBadge}>Claude</span>
                        <span className={styles.techBadge}>Perplexity</span>
                        <span className={styles.techBadge}>HuggingFace</span>
                        <span className={styles.techBadge}>Tailwind</span>
                        <span className={styles.techBadge}>Framer Motion</span>
                        <span className={styles.techBadge}>JSON Schema</span>
                        <span className={styles.techBadge}>Entity Persistence</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>LLM Orchestration</span>
                        <span className={styles.keyword}>RAG</span>
                        <span className={styles.keyword}>Workflow Automation</span>
                        <span className={styles.keyword}>Structured Outputs</span>
                        <span className={styles.keyword}>Web Intelligence</span>
                        <span className={styles.keyword}>Document Summaries</span>
                        <span className={styles.keyword}>Tailwind</span>
                        <span className={styles.keyword}>JSON Schema</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://synapse-fdea9ab5.base44.app/"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
                            </div>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </>
    );
};
