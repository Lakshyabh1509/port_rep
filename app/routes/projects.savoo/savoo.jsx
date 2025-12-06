import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
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
import styles from './savoo.module.css';

const title = 'SAVOO: High-Performance Recipe API Platform';
const description =
    'A high-performance, secure RESTful API for managing and serving recipes at scale. Ships with two parallel backends: Pure PHP (framework-lite) and Node.js (Fastify + TypeScript), both targeting 10,000+ RPM with horizontal scalability.';
const roles = [
    'Backend Architecture',
    'API Development',
    'Security Implementation',
    'Performance Optimization',
];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Savoo = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <ProjectContainer>
                <ProjectBackground
                    opacity={isDark ? 0.5 : 0.8}
                    src={sliceBackground}
                    srcSet={`${sliceBackground} 1080w, ${sliceBackgroundLarge} 2160w`}
                    placeholder={sliceBackgroundPlaceholder}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/savoo"
                    roles={roles}
                />

                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <Image
                            raised
                            srcSet={`${sliceApp} 1280w, ${sliceAppLarge} 2560w`}
                            width={1280}
                            height={800}
                            placeholder={sliceAppPlaceholder}
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                            alt="SAVOO API Architecture Diagram"
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Dual Backend Architecture</ProjectSectionHeading>
                        <ProjectSectionText>
                            SAVOO implements a unique dual-backend strategy, allowing teams to choose
                            the technology that best fits their deployment requirements.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <div className={styles.archGrid}>
                        <div className={styles.archCard}>
                            <h4>🐘 PHP Backend</h4>
                            <ul>
                                <li>Nginx + PHP-FPM</li>
                                <li>Clean Architecture (PSR/SOLID)</li>
                                <li>JWT Authentication</li>
                                <li>Argon2id Password Hashing</li>
                                <li>Redis Rate Limiting</li>
                                <li>PHPStan + PHPCS</li>
                            </ul>
                        </div>
                        <div className={styles.archCard}>
                            <h4>🟢 Node.js Backend</h4>
                            <ul>
                                <li>Fastify + TypeScript</li>
                                <li>Access + Refresh Token Pattern</li>
                                <li>Redis-backed Caching</li>
                                <li>bcrypt Password Hashing</li>
                                <li>Connection Pooling</li>
                                <li>TypeScript + ESLint</li>
                            </ul>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Key Features</ProjectSectionHeading>
                        <ProjectSectionText>
                            Enterprise-grade features built for production reliability and scale.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>🔒</span>
                            <div>
                                <h5>JWT Authentication</h5>
                                <p>Access + refresh token pattern with secure rotation</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>⚡</span>
                            <div>
                                <h5>Performance Focus</h5>
                                <p>Optimized PDO/mysql2, prepared statements, connection pooling</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>🛡️</span>
                            <div>
                                <h5>Rate Limiting</h5>
                                <p>Sliding window (Redis) for abusive traffic protection</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>📦</span>
                            <div>
                                <h5>Clean Architecture</h5>
                                <p>Controllers → Services → Repositories → Domain Models</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>🐳</span>
                            <div>
                                <h5>Dockerized</h5>
                                <p>Full stack containerization with Docker Compose</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureIcon}>✅</span>
                            <div>
                                <h5>Testing</h5>
                                <p>PHPUnit + Jest with in-memory SQLite/supertest</p>
                            </div>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>PHP 8.2+</span>
                        <span className={styles.techBadge}>Node.js</span>
                        <span className={styles.techBadge}>TypeScript</span>
                        <span className={styles.techBadge}>Fastify</span>
                        <span className={styles.techBadge}>MySQL</span>
                        <span className={styles.techBadge}>Redis</span>
                        <span className={styles.techBadge}>Docker</span>
                        <span className={styles.techBadge}>Nginx</span>
                        <span className={styles.techBadge}>JWT</span>
                        <span className={styles.techBadge}>PHPUnit</span>
                        <span className={styles.techBadge}>Jest</span>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Performance Metrics</ProjectSectionHeading>
                        </ProjectTextRow>
                        <div className={styles.metricsGrid}>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>10k+</span>
                                <span className={styles.metricLabel}>Requests Per Minute</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>Dual</span>
                                <span className={styles.metricLabel}>Backend Architecture</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>HS256</span>
                                <span className={styles.metricLabel}>JWT Signing</span>
                            </div>
                            <div className={styles.metricCard}>
                                <span className={styles.metricValue}>60s</span>
                                <span className={styles.metricLabel}>Cache TTL</span>
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow center centerMobile noMargin>
                            <ProjectSectionHeading>Explore the Project</ProjectSectionHeading>
                            <ProjectSectionText>
                                View the complete source code with both PHP and Node.js implementations.
                            </ProjectSectionText>
                            <div className={styles.projectLinks}>
                                <Link
                                    href="https://github.com/Lakshyabh1509/savoo"
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
