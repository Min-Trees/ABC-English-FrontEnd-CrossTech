import React from 'react';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-mdi/home'; // Đảm bảo biểu tượng này có sẵn trong thư viện

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
          <Icon icon={homeIcon} style={{ fontSize: '48px' }} />
          <h1 className="text-4xl mb-4">About Us</h1>
          <p className="text-lg">This is the about page of our application.</p>
        </div>
    );
};

export default AboutPage;
