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
import styles from './apex-marketing.module.css';

const title = 'Apex Marketing Intelligence Suite';
const description =
    'Real-time collaboration platform enabling multi-user screen sharing, AI-powered chat analysis, and live analytics for marketing teams. Features WebRTC integration and secure file sharing.';
const roles = [
    'Full-Stack Development',
    'WebRTC Integration',
    'Real-time Collaboration',
    'AI Chat Analysis',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const ApexMarketing = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/apex-marketing"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectTextRow>
                        <ProjectSectionHeading>The Problem</ProjectSectionHeading>
                        <ProjectSectionText>
                            Marketing teams struggle with fragmented collaboration tools. Screen sharing
                            is limited to one viewer, file downloads are restricted, and real-time
                            analytics are disconnected from collaboration workflows.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📺</span>
                            <h4>Multi-User Screen Sharing</h4>
                            <p>WebRTC signaling allows all participants to view shared screens simultaneously</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📁</span>
                            <h4>Universal File Downloads</h4>
                            <p>All users in a chat room can download shared files with proper authorization</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🤖</span>
                            <h4>AI Chat Analysis</h4>
                            <p>Powered by LLM for sentiment analysis and conversation insights</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📊</span>
                            <h4>Live Analytics</h4>
                            <p>Real-time dashboards with engagement metrics and collaboration stats</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>Node.js</span>
                        <span className={styles.techBadge}>WebRTC</span>
                        <span className={styles.techBadge}>Socket.IO</span>
                        <span className={styles.techBadge}>Supabase</span>
                        <span className={styles.techBadge}>TailwindCSS</span>
                        <span className={styles.techBadge}>LangChain</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>View the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/apex-marketing"
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
