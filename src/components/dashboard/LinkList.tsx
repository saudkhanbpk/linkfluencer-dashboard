import React from 'react';
import LinkSquare from '../common/cards/LinkSquare';
import { ILink } from '../../interfaces/Link';

interface LinksListProps {
  links: ILink[];
  minimize: boolean;
  editModalOpen: (id: string) => void;
  detailsModalOpen: (id: string) => void;
}

const LinksList: React.FC<LinksListProps> = ({
  links,
  minimize,
  editModalOpen,
  detailsModalOpen,
}) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link) => (
        <div key={link._id} className="mt-4 lg:mt-0">
          <LinkSquare
            link={link}
            minimize={minimize}
            editModalOpen={editModalOpen}
            detailsModelOpen={detailsModalOpen}
          />
        </div>
      ))}
    </div>
  );
};

export default LinksList;
