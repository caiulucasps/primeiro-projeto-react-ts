import styles from './Task.module.scss';

import { Check, Trash } from 'phosphor-react';

interface TaskProps {
  isDone: boolean;
  content: string;
  onCheck(): void;
  onRemove(): void;
}

export function Task({ isDone, content, onCheck, onRemove }: TaskProps) {
  const styleIsDone = isDone ? styles.done : '';

  return (
    <li className={styles.task}>
      <label>
        <input type="checkbox" checked={isDone} onChange={onCheck} />

        <span>
          <Check />
        </span>
      </label>

      <p className={styleIsDone}>
        {content}
      </p>

      <button onClick={onRemove}>
        <Trash />
      </button>
    </li>
  )
}