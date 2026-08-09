import { CheckCircle2, XCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/BrandIcons';
import ProofChecklist from '../../../components/ProofChecklist';
import { computeProofSummary } from '../../../utils/challengeHelpers';
import styles from './ProofStatusSection.module.css';

export default function ProofStatusSection({ profile, today, stats }) {
  const { items, doneCount, total } = computeProofSummary(today);

  return (
    <section className={styles.section} aria-labelledby="proof-heading">
      <h2 id="proof-heading" className={styles.heading}>
        Proof status
      </h2>

      <div className={styles.statusGrid}>
        <div className={styles.statusCard}>
          <div className={`${styles.iconWrap} ${styles.githubIcon}`}>
            <GithubIcon size={18} />
          </div>
          <div className={styles.statusText}>
            <p className={styles.statusTitle}>GitHub</p>
            <p className={styles.statusSub}>
              {profile.githubConnected ? `@${profile.githubUsername}` : 'Not connected'}
            </p>
          </div>
          {profile.githubConnected ? (
            <CheckCircle2 size={18} className={styles.connected} aria-hidden="true" />
          ) : (
            <XCircle size={18} className={styles.disconnected} aria-hidden="true" />
          )}
        </div>

        <div className={styles.statusCard}>
          <div className={`${styles.iconWrap} ${styles.linkedinIcon}`}>
            <LinkedinIcon size={18} />
          </div>
          <div className={styles.statusText}>
            <p className={styles.statusTitle}>LinkedIn</p>
            <p className={styles.statusSub}>
              {profile.linkedinConnected ? `${stats.linkedinProofCount} posts shared` : 'Not connected'}
            </p>
          </div>
          {profile.linkedinConnected ? (
            <CheckCircle2 size={18} className={styles.connected} aria-hidden="true" />
          ) : (
            <XCircle size={18} className={styles.disconnected} aria-hidden="true" />
          )}
        </div>
      </div>

      <ProofChecklist items={items} doneCount={doneCount} total={total} variant="compact" />
    </section>
  );
}
