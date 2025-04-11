
import Layout from "@/components/layout/Layout";
import ColorPalette from "@/components/utilities/ColorPalette";

const ColorPalettePage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Color Palette Generator</h1>
        <div className="h-[400px] bg-card rounded-lg shadow-sm border border-border/60 overflow-hidden">
          <ColorPalette />
        </div>
      </div>
    </Layout>
  );
};

export default ColorPalettePage;
