import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getScenario } from '../../utils/scenario';
import { getDayByNumber, computeProofSummary } from '../../utils/challengeHelpers';
import ProofChecklist from '../../components/ProofChecklist';
import DayHeader from './sections/DayHeader';
import MissionSection from './sections/MissionSection';
import RequirementsChecklist from './sections/RequirementsChecklist';
import ProofSubmissionSection from './sections/ProofSubmissionSection';
import { DayNotFound, MissedDayBanner, UpcomingDayBanner } from './sections/DayStateBanners';
import styles from './ChallengeDayPage.module.css';

export default function ChallengeDayPage() {
  const { dayId } = useParams();
  const [searchParams] = useSearchParams();
  const { profile, days } = getScenario(searchParams);

  const dayNumber = Number(dayId);
  const isValidDay = Number.isInteger(dayNumber) && dayNumber >= 1 && dayNumber <= 60;
  const day = isValidDay ? getDayByNumber(days, dayNumber) : null;

  const [proofState, setProofState] = useState(() => ({
    taskComplete: Boolean(day?.proof.taskComplete),
    githubUrl: day?.proof.githubUrl ?? '',
    linkedinUrl: day?.proof.linkedinUrl ?? '',
  }));
  const [checkedReqs, setCheckedReqs] = useState(() =>
    day ? day.requirements.map(() => day.status === 'completed') : []
  );
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    if (!day) return;
    setProofState({
      taskComplete: Boolean(day.proof.taskComplete),
      githubUrl: day.proof.githubUrl ?? '',
      linkedinUrl: day.proof.linkedinUrl ?? '',
    });
    setCheckedReqs(day.requirements.map(() => day.status === 'completed'));
    setJustSubmitted(false);
  }, [day?.day, day?.status]);

  if (!isValidDay) return <DayNotFound currentDay={profile.currentDay} />;
  if (!day) return <DayNotFound currentDay={profile.currentDay} />;

  if (day.status === 'missed') {
    return (
      <div className={`container ${styles.page}`}>
        <DayHeader day={day} />
        <MissedDayBanner day={day} currentDay={profile.currentDay} />
        <MissionSection mission={day.mission} />
      </div>
    );
  }

  if (day.status === 'upcoming') {
    return (
      <div className={`container ${styles.page}`}>
        <DayHeader day={day} />
        <UpcomingDayBanner day={day} currentDay={profile.currentDay} />
        <MissionSection mission={day.mission} preview />
      </div>
    );
  }

  const derivedProofState = {
    ...proofState,
    // "Complete today's task" also counts once every requirement is checked off.
    taskComplete: proofState.taskComplete || checkedReqs.every(Boolean),
  };
  const { items, doneCount, total } = computeProofSummary({ proof: derivedProofState });

  return (
    <div className={`container ${styles.page}`}>
      <DayHeader day={day} />
      <MissionSection mission={day.mission} />
      <RequirementsChecklist
        requirements={day.requirements}
        checked={checkedReqs}
        onToggle={(i) =>
          setCheckedReqs((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
        }
        interactive={day.status === 'current'}
      />

      <ProofChecklist items={items} doneCount={doneCount} total={total} variant="full" />

      {day.status === 'current' && (
        <ProofSubmissionSection
          day={day.day}
          proofState={proofState}
          onChange={(next) => {
            setProofState(next);
            setJustSubmitted(false);
          }}
          onSubmit={() => setJustSubmitted(true)}
          justSubmitted={justSubmitted}
        />
      )}

      {day.status === 'completed' && (
        <p className={styles.completedNote}>
          This day is already in the books — proof was submitted and your streak stayed intact.
        </p>
      )}
    </div>
  );
}
