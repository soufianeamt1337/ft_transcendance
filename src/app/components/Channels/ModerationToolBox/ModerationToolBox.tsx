import { useSessionUser } from "../../../context/SessionUserContext"
import { findUserContacts } from "../../../context/UsersContactBookContext"
import { UserModerationCard } from "../UserModerationCard/UserModerationCard"
import style from "./ModerationToolBox.module.css"



interface ModerationToolBoxProps{
    channelData: ChannelData|undefined, 
}
export function ModerationToolBox ({channelData}:ModerationToolBoxProps)
{
    const currentUser = useSessionUser()
    const getUserRole = (user_id:string) =>
    {
        if ( channelData &&  channelData?.channelAdmins.includes(user_id))
            return "Admin"
        else if ( user_id === channelData?.channelOwner)
            return "Owner"
        else
            return "Member"
    }

    return (
        <>
        {channelData && 
        <div className={style.moderation_tool_box}>
                <h2>Channel Members</h2>
                <div className={style.users_cards}>
                {
                        channelData?.channelUsers.map((user)=>{
                            let userData;
                            if (user !==  currentUser.id)
                                userData = findUserContacts(user)
                            else
                                userData = {avatar:currentUser.avatar, username:currentUser.username}
                            const userRole = getUserRole (user)
                            console.log ("ChannelAdmins", channelData?.channelAdmins)
                            console.log ("User:", user, "Role:", userRole)
                             return (userData &&
                                <UserModerationCard data={{
                                 src:userData?.avatar,
                                 username:userData?.username,
                                 role:userRole
                             }}/> )
                        })

                    }
            </div>

            <div className={style.user_addition}>
                <input placeholder="Enter a username"></input>
                <button>Add User</button>
            </div>
        </div>
        }
        </>
    )
}