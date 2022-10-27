import { useEffect } from 'react';
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
  Text,
  Avatar,
} from '@matoa-ui/components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Loader from '../../containers/Common/Loader';

// Store
import { getUsersList } from '../../store/userManagement/slice';
import { commonSelector } from '../../store/common/selector';
import { userSelector } from '../../store/userManagement/selectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector(userSelector);
  const {
    networkCall: { loading },
  } = useSelector(commonSelector);

  useEffect(() => {
    dispatch(getUsersList({ limit: 10 }));
  }, [dispatch]);

  const columns: {
    title: string;
    dataIndex: string;
    key: string;
  }[] = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Profile',
      dataIndex: 'profile',
      key: 'profile',
    },
  ];

  return (
    <Box display="block" width="100%" height="100%" p="xl">
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeadRow>
              {columns.map((column: any, index: number) => {
                return <TableHeadCell key={index}>{column.title}</TableHeadCell>;
              })}
            </TableHeadRow>
          </TableHead>
          <TableBody>
            {users &&
              users?.map((user: any, index: number) => {
                return (
                  <TableBodyRow key={index}>
                    <TableBodyCell>
                      <Box alignItems="center" display="inline-flex">
                        <Text as="span" ml="xs" scale={300}>
                          {index + 1}
                        </Text>
                      </Box>
                    </TableBodyCell>
                    <TableBodyCell>
                      <Box alignItems="center" display="inline-flex">
                        <Text as="span" ml="xs" scale={300}>
                          {user.firstName}
                        </Text>
                      </Box>
                    </TableBodyCell>
                    <TableBodyCell>
                      <Box alignItems="center" display="inline-flex">
                        <Text as="span" ml="xs" scale={300}>
                          {user.lastName}
                        </Text>
                      </Box>
                    </TableBodyCell>
                    <TableBodyCell>
                      <Box alignItems="center" display="inline-flex">
                        <Avatar size="lg" name={user.firstName} src={user.picture} />
                      </Box>
                    </TableBodyCell>
                  </TableBodyRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
