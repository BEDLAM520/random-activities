import { ActivityInterface } from "../models/Activity";
import { FaAsterisk, FaMoneyBill, FaPeopleCarry } from "react-icons/fa";

interface props {
  activity: ActivityInterface;
}

const ActivityCard: React.FC<props> = ({ activity }) => {
  return (
    <div className="flex flex-auto flex-col bg-white rounded-xl justify-between overflow-hidden shadow-md">
      <div className="bg-purple-200 flex w-[100%] h-8 items-center justify-center">
        {activity.type}
      </div>
      <div className="flex flex-col gap-4 p-6 pt-6">
        <h2 className="text-xl font-bold break-words">{activity.activity}</h2>

        <div className="flex flex-row text-md font-medium items-center">
          <FaPeopleCarry className="text-primary text-xl mr-2" />
          {activity.participants} participant(s)
        </div>
        <div className="flex flex-row text-md font-medium items-center mb-2">
          <FaMoneyBill className="text-primary text-xl mr-2" />${" "}
          {activity.price * 100}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
