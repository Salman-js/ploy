import { RootState } from '@/store/store';
import { getCalendarConfig } from '@/utils/themeOptions';
import { Calendar, ConfigProvider } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function Meetings() {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <main className='apps-container'>
      <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100'>
        Meetings
      </h2>
      <div className='calendar-container'>
        <ConfigProvider
          theme={{
            components: getCalendarConfig(theme),
          }}
        >
          <Calendar
            className='p-4 rounded-xl'
            style={{
              backdropFilter: 'blur(3px)',
            }}
          />
        </ConfigProvider>
      </div>
    </main>
  );
}
