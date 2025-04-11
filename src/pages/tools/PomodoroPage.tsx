
import Layout from "@/components/layout/Layout";
import PomodoroTimer from "@/components/utilities/PomodoroTimer";

const PomodoroPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Pomodoro Timer</h1>
        <div className="h-[400px] bg-card rounded-lg shadow-sm border border-border/60 overflow-hidden">
          <PomodoroTimer />
        </div>
      </div>
    </Layout>
  );
};

export default PomodoroPage;
