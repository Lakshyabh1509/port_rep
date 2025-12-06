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
import styles from './savoo.module.css';
import { HouseAnimation } from './HouseAnimation';



const title = 'SAVOO – High-Performance Dual Backend Recipe API (PHP + Node.js)';
const description =
    'Scalable, secure REST API for recipe management with parallel PHP and Node.js implementations optimized for 10k+ RPM throughput.';
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
                <HouseAnimation />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://github.com/Lakshyabh1509/SAVOO-RESTful-Recipes-API"
                    roles={roles}
                />



                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Executive Summary</ProjectSectionHeading>
                        <ProjectSectionText>
                            SAVOO is a scalable, secure REST API for recipe management with parallel
                            PHP and Node.js implementations optimized for 10k+ RPM throughput.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Dual Backend Architecture</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.archGrid}>
                        <div className={styles.archCard}>
                            <h4>PHP Backend</h4>
                            <ul>
                                <li>Nginx → PHP-FPM</li>
                                <li>Clean architecture + PSR-4</li>
                                <li>JWT auth</li>
                                <li>Redis rate limiting</li>
                                <li>PHPStan + PHPUnit</li>
                            </ul>
                        </div>
                        <div className={styles.archCard}>
                            <h4>Node.js Backend</h4>
                            <ul>
                                <li>Fastify + TypeScript</li>
                                <li>Access + refresh tokens</li>
                                <li>Redis caching + invalidation</li>
                                <li>Jest + Supertest</li>
                            </ul>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Infrastructure</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <div>
                                <h5>Docker Compose</h5>
                                <p>API + MySQL + Redis full stack containerization</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div>
                                <h5>Argon2id Password Hashing</h5>
                                <p>State-of-the-art password security</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div>
                                <h5>Strict CORS & Sanitization</h5>
                                <p>Enterprise-grade input validation and security</p>
                            </div>
                        </div>
                    </div>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.techStack}>
                        <span className={styles.techBadge}>PHP-FPM</span>
                        <span className={styles.techBadge}>Fastify</span>
                        <span className={styles.techBadge}>TypeScript</span>
                        <span className={styles.techBadge}>Redis</span>
                        <span className={styles.techBadge}>JWT</span>
                        <span className={styles.techBadge}>Clean Architecture</span>
                        <span className={styles.techBadge}>Docker</span>
                        <span className={styles.techBadge}>MySQL</span>
                        <span className={styles.techBadge}>PHPUnit</span>
                        <span className={styles.techBadge}>Jest</span>
                        <span className={styles.techBadge}>Nginx</span>
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
                    <ProjectTextRow>
                        <ProjectSectionHeading>Keywords</ProjectSectionHeading>
                    </ProjectTextRow>
                    <div className={styles.keywords}>
                        <span className={styles.keyword}>PHP-FPM</span>
                        <span className={styles.keyword}>Fastify</span>
                        <span className={styles.keyword}>Redis</span>
                        <span className={styles.keyword}>JWT</span>
                        <span className={styles.keyword}>Clean Architecture</span>
                        <span className={styles.keyword}>Rate Limiting</span>
                        <span className={styles.keyword}>Docker</span>
                        <span className={styles.keyword}>High-Performance APIs</span>
                    </div>
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
                                    href="https://github.com/Lakshyabh1509/SAVOO-RESTful-Recipes-API"
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
