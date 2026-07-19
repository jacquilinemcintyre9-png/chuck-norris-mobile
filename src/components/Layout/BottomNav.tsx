import React from 'react';

type TabKey = 'jokes' | 'categories' | 'favorites';

interface BottomNavProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ active, onChange }) => {
  const tabs: { key: TabKey; icon: string; label: string }[] = [
    { key: 'jokes', icon: '👊', label: 'Шутки' },
    { key: 'categories', icon: '📂', label: 'Катег' },
    { key: 'favorites', icon: '⭐', label: 'Избр' }
  ];

  return (
    <div
      style={{
        marginTop: 18,
        paddingTop: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 12
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              minWidth: 80,
              padding: '6px 8px',
              borderRadius: 12,
              border: 'none',
              outline: 'none',
              background: isActive
                ? 'rgba(255, 152, 0, 0.2)'
                : 'rgba(33, 33, 33, 0.9)',
              color: isActive ? '#ffcc80' : '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
