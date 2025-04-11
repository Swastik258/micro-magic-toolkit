
import Layout from "@/components/layout/Layout";
import LinkShortener from "@/components/utilities/LinkShortener";

const URLShortenerPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">URL Shortener</h1>
        <div className="h-[400px] bg-card rounded-lg shadow-sm border border-border/60 overflow-hidden">
          <LinkShortener />
        </div>
      </div>
    </Layout>
  );
};

export default URLShortenerPage;
