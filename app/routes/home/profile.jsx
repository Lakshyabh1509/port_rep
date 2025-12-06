import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Why Hire Me?" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Lakshya, a <Link href="https://www.linkedin.com/in/lakshya-bhambhani-888189260/">Gen AI Engineer</Link> with
      hands-on experience building LLM pipelines, RAG systems, and scalable backend architectures.
      At wsup.ai (Bluestacks), I optimized engagement pipelines that increased
      chat length by 50% and reduced churn by 30%.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I deliver measurable outcomes: +22% prediction accuracy,
      +90% operational efficiency, and enterprise-grade solutions that scale.
      My projects span from autonomous AI agent swarms to high-performance APIs handling
      10k+ requests per minute.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently pursuing B.Tech in Computer Science at VIT Vellore. I thrive on solving
      complex problems with elegant code and turning data into actionable intelligence.
      Let's build something remarkable together.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
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
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Let's Connect
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Lakshya Bhambhani - Gen AI Engineer"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
