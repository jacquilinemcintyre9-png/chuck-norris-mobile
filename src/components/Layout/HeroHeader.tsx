import React from 'react';

export const HeroHeader: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: 12, marginBottom: 8 }}>
    <div
      style={{
        display: 'inline-block',
        padding: '10px 18px',
        borderRadius: 16,
        border: '1px solid rgba(255, 213, 79, 0.6)',
        boxShadow: '0 0 12px rgba(255, 213, 79, 0.4)'
      }}
    >
      <div
        style={{
          letterSpacing: 4,
          fontSize: 18,
          fontWeight: 700
        }}
      >
        Ч А К   Н О Р Р И С
      </div>
      <div
        style={{
          fontSize: 11,
          marginTop: 4,
          color: '#ffe082'
        }}
      >
        ЛЕГЕНДАРНЫЕ ШУТКИ
      </div>
    </div>

    <div style={{ marginTop: 8, fontSize: 10, color: '#ffd54f' }}>
      ● ● ● ● ●
    </div>
  </div>
);
