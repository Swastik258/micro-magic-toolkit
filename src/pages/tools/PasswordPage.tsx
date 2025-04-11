
import Layout from "@/components/layout/Layout";
import PasswordGenerator from "@/components/utilities/PasswordGenerator";

const PasswordPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
        <div className="h-[400px] bg-card rounded-lg shadow-sm border border-border/60 overflow-hidden">
          <PasswordGenerator />
        </div>
      </div>
    </Layout>
  );
};

export default PasswordPage;
