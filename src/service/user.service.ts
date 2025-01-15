import { UserStatus, UserType } from '@/persistence/enums';
import { User } from '@/persistence/types';

export class UserService {
  public getProfileText(user: User) {
    if (user == null) {
      return '';
    }

    switch (user.type) {
      case UserType.Admin:
        return `${user.name}(통합관리자)`;

      case UserType.FulfillmentAdmin:
        return `${user.name}(${user.fulfillment?.name} 관리자)`;

      case UserType.FulfillmentUser:
        return `${user.name}(${user.fulfillment?.name} ${user.fulfillmentCenter?.name} 센터 사용자)`;

      case UserType.PartnerAdmin:
        return `${user.name}(${user.partner?.name} 관리자)`;

      case UserType.PartnerUser:
        return `${user.name}(${user.partner?.name} ${user.partnerChannel?.name} 판매채널 사용자)`;

      default:
        return `${user.name}(${user.status})`;
    }
  }

  public getUserTypeTett(type: UserType) {
    switch (type) {
      case UserType.Admin:
        return '관리자';

      case UserType.FulfillmentAdmin:
        return '풀필먼트 관리자';

      case UserType.FulfillmentUser:
        return '풀필먼트 사용자';

      case UserType.PartnerAdmin:
        return '고객사 관리자';

      case UserType.PartnerUser:
        return '고객사 사용자';

      default:
        return type;
    }
  }

  public getUserStatusText(status: UserStatus) {
    switch (status) {
      case UserStatus.Activated:
        return '활성';

      case UserStatus.Disabled:
        return '비활성';

      default:
        return status;
    }
  }
}

export const userService = new UserService();
