import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/common/MainContentHeader';
import InputWithIcon from '../components/link/CreateLinkInput';
import Button from '../components/link/CreateLinkButton';
import { UserContext } from '../context/UserContext';
import { getUserLinks, createLink } from '../services/linkService';
import BlankDashboard from '../components/dashboard/BlankDashboard';
import DefaultDashboard from '../components/dashboard/DefaultDashboard';
import { SortLinksByOptions } from '../types/enums';
import Loading from '../components/common/Loading';

const Dashboard: React.FC = () => {
  const userContext = useContext(UserContext);
  const [userLinks, setUserLinks] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [newLink, setNewLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }
  const { user } = userContext;

  const tabs = [
    { label: 'Top Links', value: SortLinksByOptions.TopLinks },
    { label: 'Newly Added', value: SortLinksByOptions.NewlyAdded },
    { label: 'Old Links', value: SortLinksByOptions.OldLinks },
  ];

  useEffect(() => {
    const fetchUserLinks = async () => {
      if (user && user._id) {
        try {
          setIsLoading(true);
          const links = await getUserLinks(user._id, {
            sortBy: tabs[selectedTab].value,
            page: 1,
            limit: 3,
          });
          setUserLinks(links);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(true);
          console.error('Failed to fetch user links:', error);
        }
      }
    };

    fetchUserLinks();
  }, [user, selectedTab]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLink(event.target.value);
  };

  const handleCreateLink = async () => {
    if (user && user._id && newLink) {
      try {
        await createLink(user._id, newLink);
        setNewLink('');
        const links = await getUserLinks(user._id, {
          sortBy: tabs[selectedTab].value,
          page: 1,
          limit: 3,
        });
        setUserLinks(links);
      } catch (error) {
        console.error('Failed to create link:', error);
      }
    }
  };

  const getSubtitle = () => {
    if (user && user._id) {
      return user._id;
    }
    return '';
  };

  return (
    <div className="p-[12px] sm:p-[24px]">
      <Header title="Dashboard" subtitle={getSubtitle()} />
      <div className="mt-[24px] flex md:flex-row flex-col items-center">
        <InputWithIcon value={newLink} onChange={handleInputChange} />
        <Button text="Create Smart Link" onClick={handleCreateLink} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {userLinks.length > 0 ? (
            <DefaultDashboard
              links={userLinks}
              tabs={tabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ) : (
            <BlankDashboard />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
