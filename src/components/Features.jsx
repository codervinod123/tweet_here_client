import { MdAddTask } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { IoBookmarksOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";

const features = [
  {
    id: 1,
    icon: <MdAddTask size={"1.2rem"} />,
    title: "Real-Time Tweeting",
    description:
      "Users can post tweets instantly, with real-time updates in their feed",
  },
  {
    id: 2,
    icon: <HiOutlineRefresh size={"1.2rem"} />,
    title: "Follower/Following System",
    description:
      "Allows users to follow others and build a personal network to see content from their favorite users",
  },
  {
    id: 3,
    icon: <BsGraphUpArrow size={"1.2rem"} />,
    title: "Seamless UX/UI Design",
    description:
      "Clean and intuitive interface optimized for easy navigation, delivering a smooth user experience",
  },
  {
    id: 4,
    icon: <HiUserGroup size={"1.2rem"} />,
    title: "Responsive Across Devices",
    description:
      "The app adapts to different screen sizes, providing an optimized experience across smartphones, tablets, and desktops",
  },
  {
    id: 5,
    icon: <IoBookmarksOutline size={"1.2rem"} />,
    title: "Likes & Comments on Tweets",
    description:
      "Users can like or comment on tweets, promoting interaction and conversation within the community",
  },
  {
    id: 6,
    icon: <BsCalendarDate size={"1.2rem"} />,
    title: "Hashtag Support",
    description:
      "Users can include hashtags in their tweets to categorize content and make it discoverable by a broader audience",
  },
  {
    id: 7,
    icon: <BsCalendarDate size={"1.2rem"} />,
    title: "Trending Topics Section",
    description:
      "Displays popular hashtags and topics based on user activity, helping users stay up-to-date on what’s trending",
  },
  {
    id: 8,
    icon: <BsCalendarDate size={"1.2rem"} />,
    title: "Security and Privacy",
    description:
      "Implements robust security measures to protect user data and ensure privacy, including encryption and secure data storage",
  },
  {
    id: 9,
    icon: <BsCalendarDate size={"1.2rem"} />,
    title: "Security and Privacy",
    description:
      "Implements robust security measures to protect user data and ensure privacy, including encryption and secure data storage",
  },
];

const Features = () => {
  return (
    <div className="max-w-[1200px] flex flex-col m-auto justify-center items-center py-4">
      <div className="flex flex-wrap gap-[2rem] justify-center mb-4">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="bg-gradient-to-r from-blue-400 to-purple-500 p-[1rem] border rounded-md w-[320px] transition-all duration-700 hover:translate-y-2"
            >
              <div className="gap-2 flex items-center mb-[.5rem]">
                <i className="text-[1.2rem] text-white">{feature.icon}</i>
                <h3 className="text-[1.2rem] text-white font-semibold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[.9rem] text-white">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
