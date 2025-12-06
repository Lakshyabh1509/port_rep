import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
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
import styles from './edqmp.module.css';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);

const title = 'EDQMP – Enterprise Data Quality & Monitoring Platform';
const description =
    'Enterprise-grade data quality validation, lineage tracking, anomaly detection, and SLA monitoring for financial data pipelines.';
const roles = [
    'Data Pipeline Design',
    'Anomaly Detection',
    'SLA Monitoring',
    'Data Governance',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const EDQMP = () => {
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
                    url="https://edqmp-enterprise-4pcfll.vercel.app/"
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
                                        alt="EDQMP Data Quality Dashboard"
                                        cameraPosition={{ x: 0, y: 0, z: 8 }}
                                        showDelay={700}
                                        onLoad={() => setModelLoaded(true)}
                                        show={true}
                                        models={[
                                            {
                                                ...deviceModels.laptop,
                                                texture: {
                                                    srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
                                                    placeholder: sprTexturePlaceholder,
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
                            EDQMP provides enterprise-grade data quality validation, lineage tracking,
                            anomaly detection, and SLA monitoring for financial data pipelines.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Modules</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>✅</span>
                            <h4>Data Quality Engine</h4>
                            <p>Referential integrity checks, schema validation, outlier detection (Z-score, Isolation Forest), time-series anomaly detection</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📈</span>
                            <h4>Pipeline Performance Monitoring</h4>
                            <p>DAG execution tracking, SLA monitoring, predictive alerts, impact analysis</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📋</span>
                            <h4>Governance Framework</h4>
                            <p>Central metadata repository, automated remediation, audit-ready exports</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Airflow</span>
                        <span className={styles.techBadge}>Python</span>
                        <span className={styles.techBadge}>pandas</span>
                        <span className={styles.techBadge}>NumPy</span>
                        <span className={styles.techBadge}>scikit-learn</span>
                        <span className={styles.techBadge}>PostgreSQL</span>
                        <span className={styles.techBadge}>Supabase</span>
                        <span className={styles.techBadge}>Docker</span>
                        <span className={styles.techBadge}>Kubernetes</span>
                        <span className={styles.techBadge}>Terraform IaC</span>
                        <span className={styles.techBadge}>Streamlit</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>Data Quality</span>
                        <span className={styles.keyword}>Airflow</span>
                        <span className={styles.keyword}>SLA Monitoring</span>
                        <span className={styles.keyword}>Anomaly Detection</span>
                        <span className={styles.keyword}>Lineage Tracking</span>
                        <span className={styles.keyword}>Data Governance</span>
                        <span className={styles.keyword}>Supabase</span>
                        <span className={styles.keyword}>Containerized Pipelines</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://edqmp-enterprise-4pcfll.vercel.app/"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
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
