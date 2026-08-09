import { useId } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/BrandIcons';
import styles from './ProofSubmissionSection.module.css';

export default function ProofSubmissionSection({
  day,
  proofState,
  onChange,
  onSubmit,
  justSubmitted,
}) {
  const taskId = useId();
  const githubId = useId();
  const linkedinId = useId();

  return (
    <section className={styles.card} aria-labelledby="submit-heading">
      <h2 id="submit-heading" className={styles.heading}>
        Submit today's proof
      </h2>
      <p className={styles.subheading}>
        Fill in what you've finished — the checklist above updates as you go.
      </p>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label className={styles.taskLabel} htmlFor={taskId}>
          <input
            id={taskId}
            type="checkbox"
            checked={proofState.taskComplete}
            onChange={(e) => onChange({ ...proofState, taskComplete: e.target.checked })}
            className={styles.checkbox}
          />
          <span>I've completed today's coding task</span>
        </label>

        <div className={styles.field}>
          <label htmlFor={githubId} className={styles.fieldLabel}>
            <GithubIcon size={15} />
            GitHub proof link
          </label>
          <input
            id={githubId}
            type="url"
            inputMode="url"
            placeholder="https://github.com/your-username/60-days-of-code/tree/main/day-12"
            value={proofState.githubUrl}
            onChange={(e) => onChange({ ...proofState, githubUrl: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={linkedinId} className={styles.fieldLabel}>
            <LinkedinIcon size={15} />
            LinkedIn proof link
          </label>
          <input
            id={linkedinId}
            type="url"
            inputMode="url"
            placeholder="https://www.linkedin.com/posts/your-name_day12-activity..."
            value={proofState.linkedinUrl}
            onChange={(e) => onChange({ ...proofState, linkedinUrl: e.target.value })}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          {justSubmitted ? (
            <>
              <CheckCircle2 size={18} strokeWidth={2.3} aria-hidden="true" />
              Proof saved
            </>
          ) : (
            <>
              <Send size={17} strokeWidth={2.3} aria-hidden="true" />
              Submit Proof
            </>
          )}
        </button>

        {justSubmitted && (
          <p className={styles.successNote} role="status">
            Nice work — your progress for Day {day} is recorded above.
          </p>
        )}
      </form>
    </section>
  );
}
