import { ActionIcon, Button } from '@mantine/core';
import { AiOutlineCheck } from 'react-icons/ai';

export function FollowButton({ followed }: { followed: boolean }) {
  return (
    <>
      {followed ? (
        <ActionIcon
          variant='default'
          size='md'
          className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-xs'
        >
          <AiOutlineCheck className='dark:text-zinc-300 text-zinc-600 text-xs' />
        </ActionIcon>
      ) : (
        <Button
          className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-xs'
          size='compact-sm'
        >
          Follow
        </Button>
      )}
    </>
  );
}
