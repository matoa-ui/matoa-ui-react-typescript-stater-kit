import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, DropdownMenu, DropdownMenuContent, DropdownMenuHeader } from '@matoa-ui/components';

import SidebarWrapper from './style';
// import { changeCurrent } from "../../redux/app/actions";

function sidebar() {
  return (
    <Box display="flex" alignItems="left" backgroundColor="greylight03" width={256} height={640}>
      <DropdownMenu width={200}>
        <DropdownMenuContent width={200} side="left" align="start">
          <DropdownMenuHeader>Navigation</DropdownMenuHeader>

          <Box>
            <>Menu</>
          </Box>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
}

export default sidebar;
