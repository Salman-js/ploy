import { NotificationItem } from '@/components/Notifications/item.notifications';
import { RootState } from '@/store/store';
import { getCalendarConfig } from '@/utils/themeOptions';
import { Calendar, ConfigProvider, Divider } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function Notifications() {
  const { theme } = useSelector((state: RootState) => state.theme);
  const notifications = [
    {
      isNew: true,
    },
    {
      isNew: true,
    },
    {
      isNew: false,
    },
    {
      isNew: false,
    },
    {
      isNew: false,
    },
    {
      isNew: false,
    },
  ];
  return (
    <main className='apps-container'>
      <div className='notifications-content-container'>
        <div className='notifications-container'>
          <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100'>
            Notifications
          </h2>
          <div className='notifications-main-container'>
            <motion.div className='w-full space-y-2 mt-3'>
              {notifications.map((notif, index) => (
                <motion.div
                  key={index}
                  initial={{ y: '-100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <NotificationItem isNew={notif.isNew} />
                  <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className='notifications-calendar-container'>
          <AnimatePresence>
            <motion.div
              className='calendar-container'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              //   initial={{ y: '-100%', opacity: 0 }}
              //   animate={{ y: 0, opacity: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.25, bounce: true }}
            >
              <ConfigProvider
                theme={{
                  components: getCalendarConfig(theme),
                }}
              >
                <Calendar
                  className='p-4 rounded-xl'
                  fullscreen={false}
                  style={{
                    backdropFilter: 'blur(3px)',
                  }}
                />
              </ConfigProvider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
