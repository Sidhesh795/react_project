import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TOCFlashcards from './toc_rev.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TOCFlashcards />
  </StrictMode>
);
