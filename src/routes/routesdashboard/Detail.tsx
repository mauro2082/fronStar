import React, { ReactNode } from 'react';

interface DetailProps {
  selectedElement: { [key: string]: ReactNode } | null;
  propertyNames: string[];
}

const Detail: React.FC<DetailProps> = ({ selectedElement, propertyNames }) => {
  return (
    <div>
      {selectedElement &&
        propertyNames.map((property) => (
          <p key={property}>
            {property}: {selectedElement[property]}
          </p>
        ))}
    </div>
  );
};

export default Detail;
