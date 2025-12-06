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
import styles from './ai-automation.module.css';

const Model = lazy(() =>
    import('~/components/model').then(module => ({ default: module.Model }))
);

const title = 'SYNAPSE – AI Automation & Workflow Orchestration Platform';
const description =
    'Automates enterprise workflows using multi-model LLMs with structured execution frameworks, enabling content generation, travel intelligence, and document processing.';
const roles = [
    'LLM Orchestration',
    'RAG Pipeline Design',
    'Workflow Automation',
    'Multi-Model AI',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const AIAutomation = () => {
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
                    url="https://synapse-fdea9ab5.base44.app/"
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
                                        alt="Synapse AI Automation Platform"
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
                            Synapse automates enterprise workflows using multi-model LLMs with structured
                            execution frameworks, enabling content generation, travel intelligence, and
                            document processing.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Core Workflows</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.moduleGrid}>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>🌐</div>
                            <h3>Brochure Generator</h3>
                            <p>
                                Auto web context extraction, JSON schema structured output,
                                gradient card-based brochure rendering
                            </p>
                            <div className={styles.techTags}>
                                <span>Web Scraping</span>
                                <span>LLM</span>
                                <span>PDF Gen</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>✈️</div>
                            <h3>Flight Assistant</h3>
                            <p>
                                Multi-turn conversational AI, image upload + ticket parsing,
                                price comparison + flight analysis
                            </p>
                            <div className={styles.techTags}>
                                <span>Multi-Modal</span>
                                <span>Vision AI</span>
                                <span>Conversational</span>
                            </div>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleIcon}>📚</div>
                            <h3>Knowledge Worker (RAG)</h3>
                            <p>
                                Document upload, summary generation, query with cited sources,
                                entity-based history tracking
                            </p>
                            <div className={styles.techTags}>
                                <span>RAG</span>
                                <span>Vector DB</span>
                                <span>Citations</span>
                            </div>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>Base44 LLM Orchestration</span>
                        <span className={styles.techBadge}>GPT-4</span>
                        <span className={styles.techBadge}>Claude</span>
                        <span className={styles.techBadge}>Perplexity</span>
                        <span className={styles.techBadge}>HuggingFace</span>
                        <span className={styles.techBadge}>Tailwind</span>
                        <span className={styles.techBadge}>Framer Motion</span>
                        <span className={styles.techBadge}>JSON Schema</span>
                        <span className={styles.techBadge}>Entity Persistence</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>LLM Orchestration</span>
                        <span className={styles.keyword}>RAG</span>
                        <span className={styles.keyword}>Workflow Automation</span>
                        <span className={styles.keyword}>Structured Outputs</span>
                        <span className={styles.keyword}>Web Intelligence</span>
                        <span className={styles.keyword}>Document Summaries</span>
                        <span className={styles.keyword}>Tailwind</span>
                        <span className={styles.keyword}>JSON Schema</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://synapse-fdea9ab5.base44.app/"
                                    className={styles.projectLink}
                                >
                                    View Live Demo →
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
