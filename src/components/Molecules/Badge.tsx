// Badge.tsx
import React from 'react';
import { Badge as MuiBadge } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <MuiBadge badgeContent={count} color="error" style={{ marginRight: '10px'}}>
      {/* Add your icon or content here */}
      <ShoppingCart style={{ color: 'white' }} />
    </MuiBadge>
  );
};

export default Badge;
