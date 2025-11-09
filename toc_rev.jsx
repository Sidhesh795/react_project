import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

const units = [
  { title: 'Unit 1: Finite Automata', cards: new Array(5) },
  { title: 'Unit 2: Regular & Non-Regular Languages', cards: new Array(6) },
  { title: 'Unit 3: Context-Free Grammars', cards: new Array(7) },
  { title: 'Unit 4: Pushdown Automata', cards: new Array(7) },
  { title: 'Unit 5: Turing Machines', cards: new Array(8) },
];

export default function TOCFlashcards() {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const selectUnit = (idx) => {
    setSelectedUnit(idx);
    setShowMenu(false);
  };

  if (showMenu) {
    return (
      <div className="toc-root">
        <div className="toc-container">
          <header className="hero-card">
            <div className="hero-logos">
              {/* Vite / React logos - simple SVGs */}
              <svg className="logo" viewBox="0 0 24 24"><path fill="#7c3aed" d="M2 12L12 2l8 8-8 8L2 12z"/></svg>
              <svg className="logo" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.2" fill="#06b6d4"/><g stroke="#06b6d4" strokeWidth="0.9" fill="none"><ellipse rx="6" ry="2.5" cx="12" cy="12" transform="rotate(0 12 12)"/><ellipse rx="6" ry="2.5" cx="12" cy="12" transform="rotate(60 12 12)"/><ellipse rx="6" ry="2.5" cx="12" cy="12" transform="rotate(120 12 12)"/></g></svg>
            </div>

            <h1 className="hero-title">Theory of Computation</h1>
            <p className="hero-sub">Interactive Study Flashcards</p>
          </header>

          <main className="units-list">
            {units.map((unit, i) => (
              <button
                key={i}
                className="unit-card"
                onClick={() => selectUnit(i)}
                type="button"
              >
                <div className="unit-info">
                  <h2>{unit.title}</h2>
                  <div className="muted">{unit.cards.length} flashcards</div>
                </div>
                <BookOpen className="book-icon" />
              </button>
            ))}
          </main>

          <aside className="tips">
            <h3>Study Tips:</h3>
            <ul>
              <li>Click on any card to flip and see the answer</li>
              <li>Use arrow buttons to navigate through cards</li>
              <li>Review each unit multiple times for better retention</li>
              <li>Try to recall the answer before flipping the card</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => setShowMenu(true)} style={{ marginBottom: 16 }}>Back to units</button>
      <h2>{units[selectedUnit]?.title}</h2>
      <p>{units[selectedUnit]?.cards.length} flashcards — (cards view not implemented in this snippet)</p>
    </div>
  );
}