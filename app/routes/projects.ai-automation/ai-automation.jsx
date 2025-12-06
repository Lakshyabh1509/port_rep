import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
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

const title = 'AI Automation & Knowledge Workflow Platform';
const description =
    'Multi-modal AI automation platform featuring an autonomous website-to-brochure engine, multi-modal airline support agent, and RAG-based HR knowledge worker. Demonstrates end-to-end LLM application development.';
const roles = [
    'LLM Application Development',
    'RAG Pipeline Design',
    'Multi-Modal AI',
    'Workflow Automation',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const AIAutomation = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/ai-automation-platform"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectTextRow>
                        <ProjectSectionHeading>Three Integrated Modules</ProjectSectionHeading>
                        <ProjectSectionText>
                            This platform showcases three distinct yet interconnected AI automation workflows,
                            each demonstrating different aspects of modern LLM application development.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <div className={styles.moduleGrid}>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>🌐</div>
                            <h3>Website-to-Brochure Engine</h3>
                            <p>
                                Autonomous crawler that extracts content from websites and generates
                                professional marketing brochures using LLMs. Handles complex navigation,
                                dynamic content, and produces polished PDF outputs.
                            </p>
                            <div className={styles.techTags}>
                                <span>Python</span>
                                <span>Crawl4AI</span>
                                <span>LangChain</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>✈️</div>
                            <h3>Airline Support Agent</h3>
                            <p>
                                Multi-modal AI agent handling customer queries with flight booking,
                                cancellation, and rebooking capabilities. Features tool calling,
                                context management, and natural conversation flow.
                            </p>
                            <div className={styles.techTags}>
                                <span>GPT-4</span>
                                <span>Function Calling</span>
                                <span>Gradio</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>📚</div>
                            <h3>RAG HR Knowledge Worker</h3>
                            <p>
                                Context-aware AI assistant for HR policy queries. Implements RAG
                                with vector embeddings, semantic search, and grounded responses
                                that cite source documents.
                            </p>
                            <div className={styles.techTags}>
                                <span>RAG</span>
                                <span>ChromaDB</span>
                                <span>OpenAI</span>
                            </div>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Architecture</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>LangChain</span>
                        <span className={styles.techBadge}>OpenAI GPT-4</span>
                        <span className={styles.techBadge}>Claude</span>
                        <span className={styles.techBadge}>ChromaDB</span>
                        <span className={styles.techBadge}>Gradio</span>
                        <span className={styles.techBadge}>Crawl4AI</span>
                        <span className={styles.techBadge}>FastAPI</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>View the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/ai-automation-platform"
                                    className={styles.projectLink}
                                >
                                    View on GitHub →
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
