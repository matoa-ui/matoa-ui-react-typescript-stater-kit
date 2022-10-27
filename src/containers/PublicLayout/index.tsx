import { Box } from '@matoa-ui/components';

function PublicLayout({ children }: any) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="greylight03"
      width="100%"
      height="100%">
      {children}
    </Box>
  );
}

export default PublicLayout;
