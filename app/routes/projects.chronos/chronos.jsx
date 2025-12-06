import chronosDashboard from '~/assets/chronos-dashboard.png';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { useTheme } from '~/components/theme-provider';
import { Loader } from '~/components/loader';
import { deviceModels } from '~/components/model/device-models';
import { useHydrated } from '~/hooks/useHydrated';
import { Suspense, lazy, useState } from 'react';
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
import styles from './chronos.module.css';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);

const title = 'CHRONOS COMPLIANCE ENGINE';
const description =
    'Corporate Actions & Covenant Lifecycle Management platform replacing spreadsheet-driven workflows in investment banking and lending operations. Performs real-time risk scoring, covenant interrogation, and regulatory reporting with complete audit trails.';
const roles = [
    'Backend Architecture',
    'Compliance Automation',
    'Risk Scoring',
    'Regulatory Reporting',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Chronos = () => {
    const { theme } = useTheme();
    const isHydrated = useHydrated();
    const [modelLoaded, setModelLoaded] = useState(false);
    const laptopSizes = `(max-width: ${media.tablet}px) 100vw, 50vw`;

    return (
        <>
            <ProjectContainer>
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://corporate-monitoring.onrender.com/"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <div className={styles.modelContainer}>
                            {!modelLoaded && (
                                <Loader center className={styles.loader} />
                            )}
                            {isHydrated && (
                                <Suspense>
                                    <Model
                                        alt="Chronos Compliance Engine Dashboard"
                                        cameraPosition={{ x: 0, y: 0, z: 8 }}
                                        showDelay={700}
                                        onLoad={() => setModelLoaded(true)}
                                        show={true}
                                        models={[
                                            {
                                                ...deviceModels.laptop,
                                                texture: {
                                                    srcSet: `${chronosDashboard} 1280w, ${chronosDashboard} 2560w`,
                                                    placeholder: chronosDashboard,
                                                    sizes: laptopSizes,
                                                },
                                            },
                                        ]}
                                    />
                                </Suspense>
                            )}
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Executive Summary</ProjectSectionHeading>
                        <ProjectSectionText>
                            Chronos is an enterprise compliance, covenant monitoring, and corporate actions
                            management platform replacing spreadsheet-driven workflows in investment banking
                            and lending operations. It performs real-time risk scoring, covenant interrogation,
                            and regulatory reporting while maintaining complete audit trails.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Modules & Architecture</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.moduleGrid}>
                        <div className={styles.moduleCard}>
                            <h3>📊 Covenant Interrogation Module (CIM)</h3>
                            <ul>
                                <li>Automated computation of Leverage Ratio, DSCR, Interest Coverage, Current Ratio</li>
                                <li>Threshold logic with Compliant / Warning / Breach classification</li>
                                <li>Financial reporting deliverable tracking & 10% buffer-based alerting</li>
                                <li>Audit-ready ledger of covenant states</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>🔄 Corporate Action & Event Lifecycle</h3>
                            <ul>
                                <li>Tracks: Restructurings, Repricings, Amendments, Waivers, Credit Rating Changes</li>
                                <li>Event impact analysis at portfolio level</li>
                                <li>Immutable audit logs for regulatory compliance</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>📋 Documentation Governance</h3>
                            <ul>
                                <li>Tracks compliance certificates, financial statements, audit reports</li>
                                <li>Dashboard indicators: Pending → Received → Overdue</li>
                                <li>SLA-driven alerts for missing deliverables</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>🤖 AI Compliance Assistant</h3>
                            <ul>
                                <li>GPT-based contextual query support</li>
                                <li>Covenant explanation & regulatory guidance</li>
                                <li>Portfolio summarization & risk reasoning</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <h3>📈 Regulatory Reporting Engine</h3>
                            <ul>
                                <li>Basel III risk-weighted asset (RWA) calculations</li>
                                <li>Dodd-Frank stress test analytics</li>
                                <li>Auto-export to CSV, XLSX, PDF</li>
                            </ul>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Flask</span>
                        <span className={styles.techBadge}>SQLAlchemy</span>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>Supabase PostgreSQL</span>
                        <span className={styles.techBadge}>SQLite (demo)</span>
                        <span className={styles.techBadge}>Jinja2</span>
                        <span className={styles.techBadge}>Bootstrap 5</span>
                        <span className={styles.techBadge}>Supabase Auth</span>
                        <span className={styles.techBadge}>Flask-Login</span>
                        <span className={styles.techBadge}>Vercel</span>
                        <span className={styles.techBadge}>Gunicorn</span>
                        <span className={styles.techBadge}>RBAC</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Business Impact</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.metricsGrid}>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>90%</span>
                                <span className={styles.metricLabel}>Reduction in Manual Covenant Review</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Real-time</span>
                                <span className={styles.metricLabel}>Compliance Status Visibility</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Zero</span>
                                <span className={styles.metricLabel}>Missed Documentation Deliverables</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Audit-Ready</span>
                                <span className={styles.metricLabel}>System for Regulatory Checks</span>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>Corporate Actions</span>
                        <span className={styles.keyword}>Covenant Monitoring</span>
                        <span className={styles.keyword}>Basel III</span>
                        <span className={styles.keyword}>Dodd-Frank</span>
                        <span className={styles.keyword}>Flask</span>
                        <span className={styles.keyword}>SQLAlchemy</span>
                        <span className={styles.keyword}>Risk Scoring</span>
                        <span className={styles.keyword}>Audit Trail</span>
                        <span className={styles.keyword}>Financial Ratios</span>
                        <span className={styles.keyword}>Compliance Automation</span>
                        <span className={styles.keyword}>Regulatory Reporting</span>
                        <span className={styles.keyword}>PostgreSQL</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://corporate-monitoring.onrender.com/"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
                                <Link
                                    href="https://github.com/Lakshyabh1509/corporate-monitoring-"
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
