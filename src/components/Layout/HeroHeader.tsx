import React from 'react';

export const HeroHeader: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 12 }}>
    <div
      style={{
        display: 'inline-block',
        padding: '12px 20px',
        borderRadius: 20,
        border: '1px solid rgba(255, 213, 79, 0.6)',
        boxShadow: '0 0 24px rgba(255, 213, 79, 0.5)',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.6))',
        backdropFilter: 'blur(14px)'
      }}
    >
      <div
        style={{
          letterSpacing: 4,
          fontSize: 18,
          fontWeight: 700,
          textTransform: 'uppercase'
        }}
      >
        Ч А К   Н О Р Р И С
      </div>
      <div
        style={{
          fontSize: 11,
          marginTop: 4,
          color: '#ffe082',
          textTransform: 'uppercase',
          letterSpacing: 2
        }}
      >
        Легендарные шутки
      </div>
    </div>

    <div style={{ marginTop: 10, fontSize: 10, color: '#ffd54f' }}>
      ● ● ● ● ●
    </div>
  </div>
);
