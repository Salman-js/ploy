import { Divider } from 'antd';
import CompanyGroup from '../../components/Company/CompanyGroup';
import JobGroup from '../../components/Home/JobGroup';

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
