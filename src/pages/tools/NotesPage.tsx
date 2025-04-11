
import Layout from "@/components/layout/Layout";
import QuickNote from "@/components/utilities/QuickNote";

const NotesPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Quick Notes</h1>
        <div className="h-[400px] bg-card rounded-lg shadow-sm border border-border/60 overflow-hidden">
          <QuickNote />
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;
