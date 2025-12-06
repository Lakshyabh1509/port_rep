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
import styles from './omninexus.module.css';

const title = 'OmniNexus: Enterprise Intelligence Suite';
const description =
    'Multi-modal enterprise platform unifying financial operations, LangGraph agent swarms, and RAG systems. Reduced operational drag by 90% and increased prediction accuracy by 22%.';
const roles = [
    'System Architecture',
    'LLM Agent Development',
    'RAG Implementation',
    'Full-Stack Development',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const OmniNexus = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/omninexus-platform"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectTextRow>
                        <ProjectSectionHeading>The Challenge</ProjectSectionHeading>
                        <ProjectSectionText>
                            Enterprises struggle with disconnected data silos and manual workflows.
                            OmniNexus bridges this gap by unifying complex financial operations
                            with autonomous AI agents and high-velocity data pipelines.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🤖</span>
                            <h4>LangGraph Agent Swarms</h4>
                            <p>Coordinated multi-agent systems for complex task execution</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🧠</span>
                            <h4>RAG Pipelines</h4>
                            <p>Retrieval-Augmented Generation for grounded, accurate AI responses</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📊</span>
                            <h4>Financial Ops</h4>
                            <p>Automated loan restructuring and risk assessment models</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>LangChain</span>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>PostgreSQL</span>
                        <span className={styles.techBadge}>Redis</span>
                        <span className={styles.techBadge}>Docker</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/omninexus-platform"
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
