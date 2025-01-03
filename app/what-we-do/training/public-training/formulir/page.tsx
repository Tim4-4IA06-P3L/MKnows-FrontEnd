import { Metadata } from "next";
import TrainingScheduleForm from "../../../../components/TrainingScheduleForm";

export const metadata: Metadata = {
  title: "Public Training Request Form - M-Knows Consulting",
  description:
    "Public Training Request Form (Formulir Public Training) M-Knows Consulting",
};

const PublicTrainingScheduleForm = () => {
  return (
    <>
      <TrainingScheduleForm type="Public" />
    </>
  );
};

export default PublicTrainingScheduleForm;
