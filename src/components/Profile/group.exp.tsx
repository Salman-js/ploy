import { List } from 'antd';
import React from 'react';
import ExperienceItem from './item.exp';

type expProps = {
  experiences?: string[];
};

const ExperienceGroup: React.FC<expProps> = () => {
  const list = ['1', '1', '1'];
  return (
    <List
      className=''
      itemLayout='horizontal'
      dataSource={list}
      renderItem={() => <ExperienceItem />}
    />
  );
};
export default ExperienceGroup;
