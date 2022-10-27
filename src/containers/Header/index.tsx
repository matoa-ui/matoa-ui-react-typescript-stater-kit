import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Heading, Text } from '@matoa-ui/components';
import { getLoggedOutUser } from '../../utils/helpers/authUtils';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="greylight03"
      width="100%"
      height={64}
      p="md">
      <Stack direction="horizontal" alignItems="center">
        <Heading scale={400} onClick={() => navigate("/")}>Dashboard</Heading>
      </Stack>

      <Stack direction="horizontal" alignItems="center">
        <Box display="inline-flex" alignItems="center">
          <Text
            as="span"
            scale={300}
            onClick={() => {
              getLoggedOutUser();
            }}>
            Logout
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
