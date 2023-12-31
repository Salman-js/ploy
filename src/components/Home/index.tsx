import { Divider } from 'antd';
import CompanyGroup from './components/CompanyGroup';
import JobGroup from './components/JobGroup';

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
