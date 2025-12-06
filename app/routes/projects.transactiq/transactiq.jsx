import transactiqDashboard from '~/assets/transactiq-dashboard.png';
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
import styles from './transactiq.module.css';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);

const title = 'TRANSACTIQ – Transaction Analytics & Merchant Performance Intelligence';
const description =
    'Full-stack transaction performance analytics platform built for payment processors and merchant networks. Delivers deep insights into approvals, declines, merchant KPIs, customer segments, and churn prediction with ML-driven forecasting.';
const roles = [
    'Machine Learning Engineering',
    'Full-Stack Development',
    'ETL Pipeline Design',
    'Data Analytics',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const TransactIQ = () => {
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
                    url="https://transiq-mast-cdjk.vercel.app/login"
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
                                        alt="TransactIQ Dashboard"
                                        cameraPosition={{ x: 0, y: 0, z: 8 }}
                                        showDelay={700}
                                        onLoad={() => setModelLoaded(true)}
                                        show={true}
                                        models={[
                                            {
                                                ...deviceModels.laptop,
                                                texture: {
                                                    srcSet: `${transactiqDashboard} 1280w, ${transactiqDashboard} 2560w`,
                                                    placeholder: transactiqDashboard,
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
                            TransactIQ is a full-stack transaction performance analytics platform built
                            for payment processors and merchant networks. It delivers deep insights into
                            approvals, declines, merchant KPIs, customer segments, and churn prediction
                            with ML-driven forecasting.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Modules & Architecture</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔄</span>
                            <h4>ETL Pipeline</h4>
                            <p>CSV ingestion + schema normalization, de-duplication on transaction_id, payment method, category, merchant dimension tables, star schema design for analytical queries</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📊</span>
                            <h4>Real-Time KPI Engine</h4>
                            <p>Total volume, success rate, dispute rate, daily/weekly/monthly trend generation, failure reason breakdown, geo-based performance heatmaps</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🏪</span>
                            <h4>Merchant Performance Dashboard</h4>
                            <p>Revenue contribution by merchant, declining/at-risk merchant detection, 30-day inactivity churn flagging, merchant leaderboard for Ops teams</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>👥</span>
                            <h4>Customer Segmentation (RFM)</h4>
                            <p>High-value, At-risk, Dormant, Regular, New segments, lifecycle stage-based recommendations, LTV-based segmentation histograms</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔮</span>
                            <h4>Churn Prediction</h4>
                            <p>Logistic regression model, risk score (0–100), reason attribution (success rate drop, inactivity, volume decline)</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🔌</span>
                            <h4>REST API (FastAPI)</h4>
                            <p>Endpoints: /api/kpis, /api/merchants, /api/transactions, /api/churn, /api/trends, /api/upload</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technical Implementation</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>FastAPI</span>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>SQLAlchemy</span>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>Vite</span>
                        <span className={styles.techBadge}>TypeScript</span>
                        <span className={styles.techBadge}>scikit-learn</span>
                        <span className={styles.techBadge}>PostgreSQL</span>
                        <span className={styles.techBadge}>Docker Compose</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Business Impact</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.metricsGrid}>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>500k+</span>
                                <span className={styles.metricLabel}>Daily Transactions Scaled</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Proactive</span>
                                <span className={styles.metricLabel}>At-Risk Merchant Identification</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Real-time</span>
                                <span className={styles.metricLabel}>Executive Reporting</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Improved</span>
                                <span className={styles.metricLabel}>Payment Failure Insights</span>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>ETL</span>
                        <span className={styles.keyword}>FastAPI</span>
                        <span className={styles.keyword}>React</span>
                        <span className={styles.keyword}>Merchant Analytics</span>
                        <span className={styles.keyword}>Churn Modeling</span>
                        <span className={styles.keyword}>Logistic Regression</span>
                        <span className={styles.keyword}>Customer Segmentation</span>
                        <span className={styles.keyword}>Payment Trends</span>
                        <span className={styles.keyword}>PostgreSQL</span>
                        <span className={styles.keyword}>KPIs</span>
                        <span className={styles.keyword}>Transaction Intelligence</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://transiq-mast-cdjk.vercel.app/login"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
                                <Link
                                    href="https://github.com/Lakshyabh1509/transiq_mast"
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
