import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="32"
      viewBox="0 0 46 32"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          {/* LB Monogram - L on left, B on right */}
          {/* L shape */}
          <path d="M2 2h6v20h10v6H2V2z" />
          {/* B shape */}
          <path d="M22 2h12c4 0 7 2.5 7 6.5 0 2.5-1.5 4.5-4 5.5 3 1 5 3.5 5 6.5 0 4.5-3.5 7.5-8 7.5H22V2zm6 10h5c2 0 3.5-1 3.5-3s-1.5-3-3.5-3h-5v6zm0 12h6c2.5 0 4-1.5 4-4s-1.5-4-4-4h-6v8z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
