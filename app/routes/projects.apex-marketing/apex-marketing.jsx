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
import styles from './apex-marketing.module.css';
import { BuddhaAnimation } from './BuddhaAnimation';



const title = 'APEX MARKETING INTELLIGENCE SUITE';
const description =
    'Unified marketing intelligence and collaboration suite integrating CRM data, analytics pipelines, predictive modeling, and real-time team collaboration for modern marketing teams.';
const roles = [
    'Full-Stack Development',
    'Predictive Analytics',
    'Real-time Collaboration',
    'Data Governance',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const ApexMarketing = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <BuddhaAnimation />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://apex-marketing-suite.vercel.app/login"
                    roles={roles}
                />



                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Executive Summary</ProjectSectionHeading>
                        <ProjectSectionText>
                            Apex is a unified marketing intelligence and collaboration suite integrating
                            CRM data, analytics pipelines, predictive modeling, and real-time team
                            collaboration for modern marketing teams.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Modules & Architecture</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h4>Predictive Analytics Engine</h4>
                            <p>Propensity scoring (0–100), churn risk detection, cohort retention analysis, A/B test significance computation, multi-touch attribution modeling, seasonality decomposition</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Real-Time Collaboration</h4>
                            <p>Firebase chat rooms, live screen sharing (WebRTC), file sharing with virus checks, presence indicators + notifications</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>ETL & Data Ingestion</h4>
                            <p>Salesforce, HubSpot, Google Analytics connectors, data lineage tracking, data quality validation, scheduled reporting to stakeholders</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Governance & Security</h4>
                            <p>Row-Level Security (RLS), GDPR/CCPA workflows (delete, redaction), Role-Based Access Control, audit logging</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4>Interactive Dashboards</h4>
                            <p>Attribution dashboards, customer journey mapping, cohort curves, campaign scorecards, self-serve report builder</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>React 18</span>
                        <span className={styles.techBadge}>Tailwind</span>
                        <span className={styles.techBadge}>Vite</span>
                        <span className={styles.techBadge}>FastAPI</span>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>Pydantic</span>
                        <span className={styles.techBadge}>Supabase PostgreSQL</span>
                        <span className={styles.techBadge}>Firebase Realtime DB</span>
                        <span className={styles.techBadge}>WebRTC</span>
                        <span className={styles.techBadge}>scikit-learn</span>
                        <span className={styles.techBadge}>pandas</span>
                        <span className={styles.techBadge}>Vercel</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Business Impact</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.metricsGrid}>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>4h → 15min</span>
                                <span className={styles.metricLabel}>Reporting Time Reduction</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Real-time</span>
                                <span className={styles.metricLabel}>Collaboration (No Email Chains)</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>85%</span>
                                <span className={styles.metricLabel}>Predictive Accuracy</span>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>Marketing Analytics</span>
                        <span className={styles.keyword}>Attribution Modeling</span>
                        <span className={styles.keyword}>RFM</span>
                        <span className={styles.keyword}>A/B Testing</span>
                        <span className={styles.keyword}>Firebase</span>
                        <span className={styles.keyword}>WebRTC</span>
                        <span className={styles.keyword}>Propensity Modeling</span>
                        <span className={styles.keyword}>Real-Time Collaboration</span>
                        <span className={styles.keyword}>Supabase</span>
                        <span className={styles.keyword}>Predictive Analytics</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://apex-marketing-suite.vercel.app/login"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
                                <Link
                                    href="https://github.com/Lakshyabh1509/apex-marketing-suite"
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
