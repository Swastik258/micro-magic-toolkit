
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const LinkShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock function to simulate URL shortening
  const shortenUrl = () => {
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast.error("Please enter a valid URL with http:// or https://");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you'd call an actual URL shortening API
      const randomChars = Math.random().toString(36).substring(2, 8);
      setShortUrl(`https://short.url/${randomChars}`);
      setIsLoading(false);
      toast.success("URL shortened successfully!");
    }, 1000);
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      toast.success("Shortened URL copied to clipboard!");
    }
  };

  return (
    <div className="app-card p-4 flex flex-col h-full">
      <h3 className="font-semibold text-lg mb-4">URL Shortener</h3>
      
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Long URL</label>
          <div className="flex gap-2">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/very/long/url/that/needs/shortening"
              className="flex-1"
            />
            <Button onClick={shortenUrl} disabled={isLoading}>
              {isLoading ? "Shortening..." : "Shorten"}
            </Button>
          </div>
        </div>
        
        {shortUrl && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Shortened URL</label>
            <div className="flex gap-2">
              <Input
                value={shortUrl}
                readOnly
                className="flex-1"
              />
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => window.open(shortUrl, "_blank")}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkShortener;
