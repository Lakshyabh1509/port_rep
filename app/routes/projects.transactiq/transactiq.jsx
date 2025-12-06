import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './transactiq.module.css';

const title = 'TransactIQ: Enterprise Transaction Intelligence Platform';
const description =
    'An enterprise-grade transaction analytics platform providing real-time monitoring, ML-powered churn prediction with 94% accuracy, merchant performance analytics, and automated report generation with two-factor authentication.';
const roles = [
    'Machine Learning Engineering',
    'Full-Stack Development',
    'Data Analytics',
    'Security Implementation',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const TransactIQ = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <ProjectContainer>
                <ProjectBackground
                    opacity={isDark ? 0.5 : 0.8}
                    src={backgroundSpr}
                    srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
                    placeholder={backgroundSprPlaceholder}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/transactiq"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <Image
                            raised
                            srcSet={`${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`}
                            width={1280}
                            height={800}
                            placeholder={gamestackTexturePlaceholder}
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                            alt="TransactIQ Dashboard showing real-time transaction analytics"
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Platform Features</ProjectSectionHeading>
                        <ProjectSectionText>
                            TransactIQ delivers a comprehensive suite of analytics tools designed for
                            enterprise transaction management.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📊</span>
                            <h4>Smart Dashboard</h4>
                            <p>Real-time KPIs with trend analysis and interactive charts</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔮</span>
                            <h4>Churn Prediction</h4>
                            <p>ML-powered risk scoring with 94% accuracy and actionable insights</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>👥</span>
                            <h4>Merchant Analytics</h4>
                            <p>Click-to-view details with call/email contact actions</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📤</span>
                            <h4>Data Import</h4>
                            <p>CSV upload with validation and sample data download</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📑</span>
                            <h4>Report Generation</h4>
                            <p>Weekly/monthly reports with PDF/CSV export</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔐</span>
                            <h4>Enterprise Security</h4>
                            <p>2FA, password policies, Supabase integration</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
                        <ProjectSectionText>
                            Built with a modern, scalable architecture that prioritizes performance
                            and security for enterprise deployments.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>Supabase</span>
                        <span className={styles.techBadge}>Machine Learning</span>
                        <span className={styles.techBadge}>PostgreSQL</span>
                        <span className={styles.techBadge}>TailwindCSS</span>
                        <span className={styles.techBadge}>Chart.js</span>
                        <span className={styles.techBadge}>JWT Auth</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Key Metrics</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.metricsGrid}>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>94%</span>
                                <span className={styles.metricLabel}>Churn Prediction Accuracy</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Real-time</span>
                                <span className={styles.metricLabel}>Transaction Monitoring</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>2FA</span>
                                <span className={styles.metricLabel}>Multi-Factor Authentication</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>RBAC</span>
                                <span className={styles.metricLabel}>Role-Based Access Control</span>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                View the complete source code and documentation.
                            </ProjectSectionText>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/transactiq"
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
