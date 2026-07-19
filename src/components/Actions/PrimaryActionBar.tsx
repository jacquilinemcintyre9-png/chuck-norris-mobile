import React from 'react';

interface PrimaryActionBarProps {
  loading: boolean;
  onNewJoke: () => void;
}

export const PrimaryActionBar: React.FC<PrimaryActionBarProps> = ({
  loading,
  onNewJoke
}) => (
  <div style={{ marginTop: 16, marginBottom: 10 }}>
    <button
      onClick={onNewJoke}
      disabled={loading}
      style={{
        width: '100%',
        border: 'none',
        outline: 'none',
        borderRadius: 16,
        padding: '12px 16px',
        fontSize: 16,
        fontWeight: 700,
        cursor: 'pointer',
        background:
          'linear-gradient(135deg, #ff5252, #ff9800)',
        color: '#000',
        boxShadow: '0 12px 28px rgba(255, 82, 82, 0.6)'
      }}
    >
      {loading ? 'Загружаем...' : '👊  Н О В А Я  Ш У Т К А'}
    </button>

    <div
      style={{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 18
      }}
    >
      <button style={iconButtonStyle}>⭐</button>
      <button style={iconButtonStyle}>📤</button>
      <button style={iconButtonStyle}>🔊</button>
      <button style={iconButtonStyle}>📋</button>
    </div>
  </div>
);

const iconButtonStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 12,
  border: 'none',
  outline: 'none',
  background: 'rgba(33, 33, 33, 0.9)',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.7)'
};
