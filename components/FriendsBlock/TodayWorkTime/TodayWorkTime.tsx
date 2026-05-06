import { WorkDay } from "//types/friend";

interface TodayWorkTimeProps {
  workDays: WorkDay[];
  className: string;
}

const TodayWorkTime = ({ workDays, className }: TodayWorkTimeProps) => {
  const getTodayWorkTime = () => {
    if (!workDays || workDays.length === 0) return "Day and night";

    const today = new Date().getDay();

    const index = today === 0 ? 6 : today - 1;

    const todayData = workDays[index];

    if (!todayData?.isOpen) return "Closed";

    if (!todayData.from && !todayData.to) return "Day and night";

    return `${todayData.from} - ${todayData.to}`;
  };

  return <p className={className}>{getTodayWorkTime()}</p>;
};

export default TodayWorkTime;
