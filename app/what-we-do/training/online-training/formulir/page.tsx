import { Metadata } from "next";
import TrainingScheduleForm from "../../../../components/TrainingScheduleForm";

export const metadata: Metadata = {
  title: "Online Training Request Form - M-Knows Consulting",
  description:
    "Online Training Request Form (Formulir Online Training) M-Knows Consulting",
};

const OnlineTrainingScheduleForm = () => {
  return (
    <>
      <TrainingScheduleForm type="Online" />
    </>
  );
};

export default OnlineTrainingScheduleForm;
