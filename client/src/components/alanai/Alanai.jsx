import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';

const AlanAiComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const alanInstance = alanBtn({
      key: 'bd350320b2c2ceb42a4afb49ac92220c2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        console.log(command)
        switch (command) {
          case 'go to home':
          case 'navigate to home':
            navigate('/');
            break;
          case 'go to login':
          case 'navigate to login':
            navigate('/login');
            break;
          case 'go to register':
          case 'navigate to register':
            navigate('/register');
            break;
          case 'go to gigs':
            navigate('/gigs');
            break;
          case 'go to my gigs':
          case 'navigate to my gigs':
          case 'go to mygigs':
          case 'navigate to mygigs':
            navigate('/mygigs');
            break;
          case 'go to orders':
            navigate('/orders');
            break;
          case 'go to messages':
            navigate('/messages');
            break;
          case 'go to add new gig':
            navigate('/add');
            break;
          default:
            alert("can not find!")
            break;
        }
      },
    });

    // Clean up Alan AI instance when component unmounts
    return () => {
      alanInstance.deactivate();
    };
  }, [navigate]);

  return null; // This component doesn't render anything visible in the UI
};

export default AlanAiComponent;
