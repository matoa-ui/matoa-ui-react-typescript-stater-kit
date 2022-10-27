import { Users } from '../store/userManagement/types';
import { CommonState } from '../store/common/types';

export interface RootState {
  Common: CommonState;
  Users: Users;
}
