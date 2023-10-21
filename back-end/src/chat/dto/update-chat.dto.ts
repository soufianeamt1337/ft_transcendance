import { channelMembershipDto } from './chat.dto';
import { channelDto } from './chat.dto';

export interface UpdateChannelDto  {
  channel_id :string
  new_type: "PUBLIC" | "PRIVATE" | "PROTECTED";
  new_password?: string;
}

export interface UpdateUserMemberShip extends channelMembershipDto
{
  updater_id :string
}

export interface UserRoleSignal{
  targeted_username: string
  channel_id :string
}