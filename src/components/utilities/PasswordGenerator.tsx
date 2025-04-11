
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Copy, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = lowerCaseChars;
    if (includeUppercase) chars += upperCaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard!");
    }
  };

  return (
    <div className="app-card p-4 flex flex-col h-full">
      <h3 className="font-semibold text-lg mb-4">Password Generator</h3>
      
      <div className="flex gap-2 mb-4">
        <Input
          value={password}
          placeholder="Generated password"
          readOnly
          className="flex-1"
        />
        <Button size="icon" variant="outline" onClick={copyToClipboard}>
          <Copy className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={generatePassword}>
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">Length: {length}</label>
          </div>
          <Slider
            value={[length]}
            min={6}
            max={32}
            step={1}
            onValueChange={(val) => setLength(val[0])}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Include Numbers</label>
          <Switch
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Include Symbols</label>
          <Switch
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Include Uppercase</label>
          <Switch
            checked={includeUppercase}
            onCheckedChange={setIncludeUppercase}
          />
        </div>
      </div>
      
      <Button className="mt-4" onClick={generatePassword}>
        Generate Password
      </Button>
    </div>
  );
};

export default PasswordGenerator;
