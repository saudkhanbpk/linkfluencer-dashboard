import React, { useState } from 'react';
import Model from '../common/models/Model';
import LinkEditCard from '../common/cards/LinkEdit';
import LinkDetailsCard from '../common/cards/LinkDetails';
import LinksList from '../dashboard/LinkList';
import AnalyticsSection from '../dashboard/AnalyticsSection';
import TabNavigation from '../dashboard/TabNavigation';
import { ILink } from '../../interfaces/Link';

interface DefaultDashboardProps {
  links: ILink[];
  tabs: { label: string; value: string }[];
  selectedTab: number;
  setSelectedTab: (val: number) => void;
}

const DefaultDashboard: React.FC<DefaultDashboardProps> = ({
  links,
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const [minimize] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [edit, setEdit] = useState<any>({
    logo: '',
    targetSite: '',
    link: '',
    tags: [],
  });
  const [details, setDetails] = useState<any>({
    logo: '',
    targetSite: '',
    link: '',
    tags: [],
  });

  const topSources = [
    { percent: 5, socialLogo: '/assets/amazonLogo.svg' },
    // More sources...
  ];

  const editModalOpen = (id: string) => {
    // const data = links.find((link) => link.id === id);
    // if (data) {
    //   setEdit({
    //     logo: data.logo,
    //     targetSite: data.label,
    //     link: data.link,
    //     tags: data.tags,
    //   });
    // }
    setIsEditModalOpen(true);
  };

  const detailsModalOpen = (id: string) => {
    // const data = links.find((link) => link.id === id);
    // if (data) {
    //   setDetails({
    //     logo: data.logo,
    //     targetSite: data.label,
    //     link: data.link,
    //     tags: data.tags,
    //   });
    // }
    setIsDetailsModalOpen(true);
  };

  const handleEditModalClose = () => setIsEditModalOpen(false);
  const handleDetailsModalClose = () => setIsDetailsModalOpen(false);

  return (
    <div>
      <Model isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        <LinkEditCard data={edit} handleModalClose={handleEditModalClose} />
      </Model>
      <Model isOpen={isDetailsModalOpen} onClose={handleDetailsModalClose}>
        <LinkDetailsCard
          data={details}
          handleDetailsModalClose={handleDetailsModalClose}
        />
      </Model>
      <div className="bg-white p-[12px] sm:p-[24px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-[600] font-content">My Links</h1>
          <TabNavigation
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <LinksList
          links={links}
          minimize={minimize}
          editModalOpen={editModalOpen}
          detailsModalOpen={detailsModalOpen}
        />
        <AnalyticsSection topSources={topSources} />
      </div>
    </div>
  );
};

export default DefaultDashboard;
