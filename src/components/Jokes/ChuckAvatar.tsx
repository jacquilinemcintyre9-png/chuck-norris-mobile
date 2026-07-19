import React from 'react';

export const ChuckAvatar: React.FC = () => (
  <div
    style={{
      marginTop: 12,
      marginBottom: 12,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: '50%',
        border: '3px solid #ff9800',
        boxShadow: '0 0 18px rgba(255, 152, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at 30% 30%, #ffcc80 0, #f57c00 40%, #000 80%)',
        color: '#000',
        fontWeight: 700,
        fontSize: 18
      }}
    >
      ЧАК
    </div>
  </div>
);
