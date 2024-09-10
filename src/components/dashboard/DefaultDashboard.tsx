import React, { useContext, useState, useCallback } from 'react';
import Model from '../common/models/Model';
import LinkEditCard from '../common/cards/LinkEdit';
import LinkDetailsCard from '../common/cards/LinkDetails';
import LinksList from '../dashboard/LinkList';
import AnalyticsSection from '../dashboard/AnalyticsSection';
import TabNavigation from '../dashboard/TabNavigation';
import { ILink } from '../../interfaces/Link';
import { updateLink } from '../../services/linkService';
import { UserContext } from '../../context/UserContext';

interface DefaultDashboardProps {
  links: ILink[];
  tabs: { label: string; value: string }[];
  selectedTab: number;
  setSelectedTab: (val: number) => void;
  refetchLinks: () => Promise<void>;
}

type ModalType = 'edit' | 'details' | null;

const DefaultDashboard: React.FC<DefaultDashboardProps> = ({
  links,
  tabs,
  selectedTab,
  setSelectedTab,
  refetchLinks,
}) => {
  const userContext = useContext(UserContext);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedLink, setSelectedLink] = useState<ILink | null>(null);

  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const { user } = userContext;

  const topSources = [{ percent: 5, socialLogo: '/assets/amazonLogo.svg' }];

  const openModal = useCallback((type: ModalType, id: string) => {
    const link = links.find((link) => link._id === id);
    if (link) {
      setSelectedLink(link);
      setModalType(type);
    }
  }, [links]);

  const closeModal = useCallback(() => {
    setModalType(null);
    setSelectedLink(null);
  }, []);

  const handleEdit = async (updatedLink: ILink) => {
    closeModal();
    if (user) {
      await updateLink(user._id, updatedLink);
      await refetchLinks();
    }
  };

  return (
    <div>
      {modalType === 'edit' && selectedLink && (
        <Model isOpen onClose={closeModal}>
          <LinkEditCard
            link={selectedLink}
            handleEdit={handleEdit}
            handleModalClose={closeModal}
          />
        </Model>
      )}
      {modalType === 'details' && selectedLink && (
        <Model isOpen onClose={closeModal}>
          <LinkDetailsCard
            data={selectedLink}
            handleDetailsModalClose={closeModal}
          />
        </Model>
      )}

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
          minimize={false}
          editModalOpen={(id) => openModal('edit', id)}
          detailsModalOpen={(id) => openModal('details', id)}
        />
        <AnalyticsSection topSources={topSources} />
      </div>
    </div>
  );
};

export default DefaultDashboard;
