import { Divider } from 'antd';
import CompanyGroup from '../../components/Company/group.company';
import JobGroup from '../../components/Jobs/group.job';

export default function Home() {
  return (
    <main className='home-container'>
      <CompanyGroup group='popular' />
      <Divider />
      <JobGroup />
      <Divider />
      <CompanyGroup group='suggested' />
    </main>
  );
}
