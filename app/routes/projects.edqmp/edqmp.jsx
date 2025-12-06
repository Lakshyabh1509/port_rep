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
import styles from './edqmp.module.css';

const title = 'EDQMP: Enterprise Data Quality & Monitoring Platform';
const description =
    'Comprehensive data quality management platform with automated validation, anomaly detection, real-time monitoring, and compliance reporting for enterprise data pipelines.';
const roles = [
    'Backend Architecture',
    'Data Pipeline Design',
    'Anomaly Detection',
    'Compliance Automation',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const EDQMP = () => {
    const { theme } = useTheme();

    return (
        <>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/edqmp-enterprise"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectTextRow>
                        <ProjectSectionHeading>Platform Overview</ProjectSectionHeading>
                        <ProjectSectionText>
                            EDQMP addresses the critical challenge of maintaining data quality at scale.
                            Enterprise data pipelines often suffer from inconsistencies, schema drift,
                            and compliance gaps that can lead to costly decisions based on flawed data.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Features</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>✅</span>
                            <h4>Automated Validation</h4>
                            <p>Rule-based validation engine with customizable quality checks</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔍</span>
                            <h4>Anomaly Detection</h4>
                            <p>ML-powered detection of data drift and statistical anomalies</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📈</span>
                            <h4>Real-time Monitoring</h4>
                            <p>Live dashboards with alerting for data quality issues</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📋</span>
                            <h4>Compliance Reporting</h4>
                            <p>Automated reports for regulatory and audit requirements</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔄</span>
                            <h4>Self-Healing Workflows</h4>
                            <p>Automated remediation for common data quality issues</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔗</span>
                            <h4>Data Lineage</h4>
                            <p>Track data flow and transformations across pipelines</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>Flask</span>
                        <span className={styles.techBadge}>PostgreSQL</span>
                        <span className={styles.techBadge}>Redis</span>
                        <span className={styles.techBadge}>Pandas</span>
                        <span className={styles.techBadge}>Scikit-learn</span>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>Docker</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Code</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/edqmp-enterprise"
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
