import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./speech.scss"

function SpeechRecognitionComponent() {
  const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      console.log('Speech recognition started...');
      setListening(true);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended...');
      setListening(false);
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Command:', command);

      // Handle navigation based on speech commands
      if (command.includes("go to") || command.includes("navigate to")) {
        if (command.includes("home") || command.includes("index")) {
          navigate('/');
        } else if (command.includes("login")) {
          navigate('/login');
        } else if (command.includes("register")) {
          navigate('/register');
        } else if (command.includes("gigs")) {
            navigate('/gigs');
          } else if (command.includes("my gigs") || command.includes("mygigs")) {
            navigate('/mygigs');
          } else if (command.includes("orders")) {
            navigate('/orders');
          } else if (command.includes("messages")) {
            navigate('/messages');
          } else if (command.includes("add new gig")) {
            navigate('/add');
          }
      }
    };

    setRecognition(recognition);
  }, [navigate]);

  const toggleRecognition = () => {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  return (
    <div className='speech'>
      <button onClick={toggleRecognition}>
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  );
}

export default SpeechRecognitionComponent;
