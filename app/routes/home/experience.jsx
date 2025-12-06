import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

const experiences = [
    {
        company: 'wsup.ai (Bluestacks)',
        role: 'Gen AI Engineer Intern',
        period: 'May 2025 – Jul 2025',
        highlights: [
            'Optimized LLM-driven engagement pipelines, increasing average chat length by 50% and reducing churn by 30%',
            'Built Emotion Repetition Extractor and Phrase Loop Tracker to identify engagement blockers',
            'Automated logging and analytics pipelines, reducing A/B testing cycle time by 40%',
            'Validated API concurrency with simulations of 999+ parallel requests',
            'Developed Dynamic Memory Cache to extend context length for LLMs',
        ],
    },
];

const education = {
    institution: 'Vellore Institute of Technology (VIT), Vellore',
    degree: 'B.Tech in Computer Science',
    period: 'Sept 2022 – Sept 2026',
    gpa: '7.53',
};

const leadership = [
    'Board Member, IACC (VIT Vellore) — Grew active membership by 40%',
    'Volunteer, Riviera 2023 — Supported logistics for fest with 25k+ attendees',
    'Organizer, MonoTechX (graVITas 2023) — Coordinated event with 500+ participants',
    'Event Coordinator, Ideation Debate 2.0 (Yantra 2024) — Scaled to 300+ participants',
];

export const Experience = ({ id, visible, sectionRef }) => {
    const [focused, setFocused] = useState(false);
    const titleId = `${id}-title`;

    return (
        <Section
            className={styles.experience}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible || focused} timeout={0}>
                {({ visible, nodeRef }) => (
                    <div className={styles.content} ref={nodeRef}>
                        <div className={styles.tag} aria-hidden>
                            <Divider
                                notchWidth="64px"
                                notchHeight="8px"
                                collapsed={!visible}
                                collapseDelay={1000}
                            />
                            <div className={styles.tagText} data-visible={visible}>
                                Experience & Education
                            </div>
                        </div>

                        <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                            <DecoderText text="Professional Journey" start={visible} delay={500} />
                        </Heading>

                        {/* Work Experience */}
                        <div className={styles.experienceSection}>
                            {experiences.map((exp, index) => (
                                <div key={index} className={styles.experienceCard} data-visible={visible}>
                                    <div className={styles.cardHeader}>
                                        <Text size="l" weight="bold" className={styles.company}>
                                            {exp.company}
                                        </Text>
                                        <Text size="s" className={styles.period}>
                                            {exp.period}
                                        </Text>
                                    </div>
                                    <Text size="m" className={styles.role}>
                                        {exp.role}
                                    </Text>
                                    <ul className={styles.highlights}>
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex}>
                                                <Text size="s">{highlight}</Text>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className={styles.educationSection} data-visible={visible}>
                            <Text size="l" weight="bold" className={styles.sectionTitle}>
                                Education
                            </Text>
                            <div className={styles.educationCard}>
                                <Text size="m" weight="bold">{education.institution}</Text>
                                <Text size="s">{education.degree} | GPA: {education.gpa}</Text>
                                <Text size="s" className={styles.period}>{education.period}</Text>
                            </div>
                        </div>

                        {/* Leadership */}
                        <div className={styles.leadershipSection} data-visible={visible}>
                            <Text size="l" weight="bold" className={styles.sectionTitle}>
                                Leadership & Activities
                            </Text>
                            <ul className={styles.leadershipList}>
                                {leadership.map((item, index) => (
                                    <li key={index}>
                                        <Text size="s">{item}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            secondary
                            className={styles.button}
                            data-visible={visible}
                            href="/resume"
                            icon="arrow-right"
                        >
                            View Full Resume
                        </Button>
                    </div>
                )}
            </Transition>
        </Section>
    );
};
