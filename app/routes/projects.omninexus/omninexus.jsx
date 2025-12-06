import omninexusDashboard from '~/assets/omninexus-dashboard.png';
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
import styles from './omninexus.module.css';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);

const title = 'OMNINEXUS ENTERPRISE INTELLIGENCE SUITE';
const description =
    'Next-gen platform for corporate action management, compliance monitoring, and AI-driven financial reporting used by investment banking teams for portfolio commands and document automation.';
const roles = [
    'System Architecture',
    'Document Automation',
    'Financial Modeling',
    'AI Integration',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const OmniNexus = () => {
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
                    url="http://omninexus-platform.vercel.app"
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
                                        alt="OmniNexus Platform Dashboard"
                                        cameraPosition={{ x: 0, y: 0, z: 8 }}
                                        showDelay={700}
                                        onLoad={() => setModelLoaded(true)}
                                        show={true}
                                        models={[
                                            {
                                                ...deviceModels.laptop,
                                                texture: {
                                                    srcSet: `${omninexusDashboard} 1280w, ${omninexusDashboard} 2560w`,
                                                    placeholder: omninexusDashboard,
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
                            OmniNexus is a next-gen platform for corporate action management, compliance
                            monitoring, and AI-driven financial reporting used by investment banking teams
                            for portfolio commands and document automation.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Modules</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📊</span>
                            <h4>Command Center Dashboard</h4>
                            <p>Live KPI monitoring, compliance heatmap calendar, event drill-down, real-time event ticker feed</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📋</span>
                            <h4>Corporate Action Management Platform (C-AMP)</h4>
                            <p>Portfolio management with covenant details, documentation deliverable tracking, SLA-based escalation workflows, data ingestion via upload + API monitoring</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>📑</span>
                            <h4>Intelligent Reporting Suite</h4>
                            <p>Pitchbooks, Teaser Decks, CIMs generation with jsPDF + SheetJS, financial modeling + scenario analysis, data validation & error handling</p>
                        </div>
                        <div className={styles.featureCard}>
                            <span className={styles.featureIcon}>🤖</span>
                            <h4>AI Assistant</h4>
                            <p>GPT/Claude-based financial Q&A, source citation, portfolio insight generation</p>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>React</span>
                        <span className={styles.techBadge}>Vite</span>
                        <span className={styles.techBadge}>Tailwind</span>
                        <span className={styles.techBadge}>jsPDF</span>
                        <span className={styles.techBadge}>SheetJS</span>
                        <span className={styles.techBadge}>FastAPI</span>
                        <span className={styles.techBadge}>Vercel</span>
                        <span className={styles.techBadge}>RBAC</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>Corporate Actions</span>
                        <span className={styles.keyword}>Document Automation</span>
                        <span className={styles.keyword}>Financial Modeling</span>
                        <span className={styles.keyword}>AI Assistant</span>
                        <span className={styles.keyword}>jsPDF</span>
                        <span className={styles.keyword}>SheetJS</span>
                        <span className={styles.keyword}>Risk Scoring</span>
                        <span className={styles.keyword}>Portfolio Monitoring</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="http://omninexus-platform.vercel.app"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
                                </Link>
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
