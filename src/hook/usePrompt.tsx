import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const usePrompt = (onOk: () => void, onCancel: () => void) => {
  const history = useHistory();

  const [when, setWhen] = useState(false);
  const [message, setMessage] = useState('Are you sure you want to quit  ?');
  const self = useRef<any>();

  const onWindowOrTabClose = (event: any) => {
    if (!when) {
      return;
    }

    if (typeof event == 'undefined') {
      event = window.event;
    }

    if (event) {
      event.returnValue = message;
    }

    return message;
  };

  useEffect(() => {
    if (when) {
      self.current = history.block((): any => {
        if (window.confirm(message)) {
          onOk();
          return true;
        } else {
          onCancel();
          return false;
        }
      });
    } else {
      self.current = null;
    }

    window.addEventListener('beforeunload', onWindowOrTabClose);

    return () => {
      if (self.current) {
        self.current();
        self.current = null;
      }

      window.removeEventListener('beforeunload', onWindowOrTabClose);
    };
  }, [message, when]);
  return { setWhen, setMessage };
};
